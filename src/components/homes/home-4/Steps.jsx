import React from "react";
import { loadStripe } from "@stripe/stripe-js"; // Importa loadStripe

// Carga tu clave publicable de Stripe
// Asegúrate de que VITE_STRIPE_PUBLISHABLE_KEY esté en tu archivo .env en la raíz de tu proyecto React
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function Steps() {
  const handleBuyProgram = async () => {
    try {
      // 1. Llama a tu backend para crear la sesión de Checkout
      // Asegúrate de que esta URL apunte al puerto de tu server.js (ej. 3001)
      const response = await fetch(
        "http://localhost:3001/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Puedes enviar datos adicionales si tu backend los necesita para calcular el precio
          body: JSON.stringify({
            program: "Ibogaine Reset",
            amount: 2000 /* ejemplo: 20 USD */,
          }),
        }
      );

      const session = await response.json();

      if (response.ok) {
        // 2. Redirige al usuario a la página de Checkout de Stripe
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (error) {
          console.error("Error al redirigir al Checkout:", error);
          // Aquí puedes mostrar un mensaje de error al usuario
          alert(`Error: ${error.message}`);
        }
      } else {
        console.error("Error del backend:", session.error);
        alert(`Error en el servidor: ${session.error}`);
      }
    } catch (error) {
      console.error("Error de red o desconocido:", error);
      alert(
        "Hubo un problema al iniciar el proceso de pago. Inténtalo de nuevo."
      );
    }
  };

  return (
    <div className="container position-relative">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
          <h2 className="section-title mb-70 mb-sm-50 text-center">
            Our Program
          </h2>
          {/* Steps Grid */}
          <div className="mb-n20">
            <div
              className="steps-2-item d-block d-sm-flex mb-20 light-content-2"
              style={{ backgroundColor: "#F2EFE7" }}
            >
              <div
                className="steps-2-intro pb-xs-30"
                style={{ marginBottom: "1rem" }}
              >
                <h3
                  className="steps-2-title"
                  style={{ textAlign: "center", fontSize: "1.7rem" }}
                >
                  Ibogaine Reset
                </h3>
                <h6 style={{ textAlign: "center" }}>9 days</h6>

                <p
                  className="steps-2-text mb-0"
                  style={{ whiteSpace: "pre-line" }}
                >
                  We offer a single, comprehensive program designed to address
                  the full spectrum of your healing process—whether you're
                  navigating addiction, PTSD, depression, anxiety, traumatic
                  brain injury, or eating disorders. Each retreat is structured
                  around three carefully spaced flood doses of ibogaine,
                  administered under medical supervision and supported by a team
                  deeply experienced in both clinical safety and psychospiritual
                  care.
                </p>
                <p>
                  This protocol allows for a layered and sustained therapeutic
                  effect—uncovering root causes, interrupting entrenched
                  patterns, and opening the door to long-term transformation.
                  Rather than offering isolated treatments or quick
                  interventions, we provide a full arc of care: preparation,
                  intensive in-person work, and three months of integration
                  support to help stabilize and reinforce the changes you begin
                  during your time with us.
                </p>
                <p>
                  Our goal is not just to interrupt symptoms, but to create the
                  conditions for lasting personal and neurological reset.
                </p>
                <button
                  aria-controls="subscribe-result"
                  className="btn btn-mod btn-medium btn-circle text-nowrap"
                  data-btn-animate="y"
                  style={{ width: "100%", backgroundColor: "rgb(47, 58, 89)" }}
                  onClick={handleBuyProgram}
                >
                  Buy Program
                </button>
              </div>
            </div>
            {/* End Steps Item */}
          </div>
          {/* End Steps Grid */}
        </div>
      </div>
    </div>
  );
}
