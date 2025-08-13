require("dotenv").config();
const express = require("express");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const cors = require("cors");
const bodyParser = require("body-parser"); // Asegúrate de que esté aquí

const app = express();
const PORT = process.env.PORT || 3001; // Usaremos 3001 para el backend, para que Vite pueda usar 5173

// Middleware para CORS y JSON
app.use(cors());
app.use(bodyParser.json()); // Para parsear el cuerpo de las peticiones POST

// --- Rutas de la API de Stripe ---
app.post("/create-checkout-session", async (req, res) => {
  const YOUR_DOMAIN = "http://localhost:5173"; // URL de tu frontend de desarrollo (Vite)

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd", // O 'mxn' para pesos mexicanos
            product_data: {
              name: "Ibogaine Reset",
              description: "We offer a single, comprehensive program designed to address the full spectrum of your healing process—whether you're navigating addiction, PTSD, depression, anxiety, traumatic brain injury, or eating disorders. ",
            },
            unit_amount: 900000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send({ error: error.message });
  }
});

// --- Servir archivos estáticos desde dist (para producción) ---
// Esto solo se usará cuando despliegues tu aplicación.
// Durante el desarrollo, Vite se encarga de servir el frontend.
app.use(express.static(path.join(__dirname, "dist")));

// Redirigir cualquier ruta no API a index.html (para el enrutamiento de React)
app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});