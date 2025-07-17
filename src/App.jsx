/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./styles/styles.css";
import { parallaxMouseMovement, parallaxScroll } from "@/utlis/parallax";

import { init_wow } from "@/utlis/initWowjs";
import { headerChangeOnScroll } from "@/utlis/changeHeaderOnScroll";
import { Route, Routes, useLocation } from "react-router-dom";
import PreviewPage from "@/pages/page";
import Home1MainDemoMultiPage from "@/pages/homes/home-1/main-demo/main-multi-page/page";
import Home1TypedTextMultiPage from "@/pages/homes/home-1/typed-text/main-multi-page-typed-text/page";
import Home1ImageParallaxMultiPage from "@/pages/homes/home-1/image-parallax/main-multi-page-image-parallax/page";
import Home1SliderFullscreenMultiPage from "@/pages/homes/home-1/slider-fullscreen/main-multi-page-slider-fullscreen/page";
import Home1SliderBackgroundMultiPage from "@/pages/homes/home-1/slider-background/main-multi-page-slider-background/page";
import Home1BGVideoMultiPage from "@/pages/homes/home-1/bg-video/main-multi-page-bg-video/page";
import Home1BGVideoYoutubeMultiPage from "@/pages/homes/home-1/bg-video-youtube/main-multi-page-bg-video-youtube/page";
import Home1MainDemoOnepage from "@/pages/homes/home-1/main-demo/main-one-page/page";
import Home1TypedTextOnepage from "@/pages/homes/home-1/typed-text/main-one-page-typed-text/page";
import Home1ImageParallaxOnepage from "@/pages/homes/home-1/image-parallax/main-one-page-image-parallax/page";
import Home1SliderFullscreenOnepage from "@/pages/homes/home-1/slider-fullscreen/main-one-page-slider-fullscreen/page";
import Home1SliderBackgroundOnepage from "@/pages/homes/home-1/slider-background/main-one-page-slider-background/page";
import Home1BGVideoOnepage from "@/pages/homes/home-1/bg-video/main-one-page-bg-video/page";
import Home1BGVideoYoutubeOnepage from "@/pages/homes/home-1/bg-video-youtube/main-one-page-bg-video-youtube/page";
import Home1MainDemoMultiPageDark from "@/pages/homes/home-1/main-demo/main-multi-page-dark/page";
import Home1TypedTextMultiPageDark from "@/pages/homes/home-1/typed-text/main-multi-page-typed-text-dark/page";
import Home1ImageParallaxMultiPageDark from "@/pages/homes/home-1/image-parallax/main-multi-page-image-parallax-dark/page";
import Home1SliderFullscreenMultiPageDark from "@/pages/homes/home-1/slider-fullscreen/main-multi-page-slider-fullscreen-dark/page";
import Home1SliderBackgroundMultiPageDark from "@/pages/homes/home-1/slider-background/main-multi-page-slider-background-dark/page";
import Home1BGVideoMultiPageDark from "@/pages/homes/home-1/bg-video/main-multi-page-bg-video-dark/page";
import Home1MainDemoOnepageDark from "@/pages/homes/home-1/main-demo/main-one-page-dark/page";
import Home1TypedTextOnepageDark from "@/pages/homes/home-1/typed-text/main-one-page-typed-text-dark/page";
import Home1ImageParallaxOnepageDark from "@/pages/homes/home-1/image-parallax/main-one-page-image-parallax-dark/page";
import Home1SliderFullscreenOnepageDark from "@/pages/homes/home-1/slider-fullscreen/main-one-page-slider-fullscreen-dark/page";
import Home1SliderBackgroundOnepageDark from "@/pages/homes/home-1/slider-background/main-one-page-slider-background-dark/page";
import Home1BGVideoOnepageDark from "@/pages/homes/home-1/bg-video/main-one-page-bg-video-dark/page";
import Home1BGVideoYoutubeOnepageDark from "@/pages/homes/home-1/bg-video-youtube/main-one-page-bg-video-youtube-dark/page";
import Home2MainDemoMultiPage from "@/pages/homes/home-2/main-demo/bold-multi-page/page";
import Home2TypedTextMultiPage from "@/pages/homes/home-2/typed-text/bold-multi-page-typed-text/page";
import Home2BGVideoMultiPage from "@/pages/homes/home-2/bg-video/bold-multi-page-bg-video/page";
import Home2MainDemoOnepage from "@/pages/homes/home-2/main-demo/bold-one-page/page";
import Home2TypedTextOnepage from "@/pages/homes/home-2/typed-text/bold-one-page-typed-text/page";
import Home2BGVideoOnepage from "@/pages/homes/home-2/bg-video/bold-one-page-bg-video/page";
import Home2MainDemoMultiPageDark from "@/pages/homes/home-2/main-demo/bold-multi-page-dark/page";
import Home2TypedTextMultiPageDark from "@/pages/homes/home-2/typed-text/bold-multi-page-typed-text-dark/page";
import Home2BGVideoMultiPageDark from "@/pages/homes/home-2/bg-video/bold-multi-page-bg-video-dark/page";
import Home2MainDemoOnepageDark from "@/pages/homes/home-2/main-demo/bold-one-page-dark/page";
import Home2TypedTextOnepageDark from "@/pages/homes/home-2/typed-text/bold-one-page-typed-text-dark/page";
import Home2BGVideoOnepageDark from "@/pages/homes/home-2/bg-video/bold-one-page-bg-video-dark/page";
import Home3MainDemoMultiPage from "@/pages/homes/home-3/main-demo/brutalist-multi-page/page";
import Home3BGVideoMultiPage from "@/pages/homes/home-3/bg-video/brutalist-multi-page-bg-video/page";
import Home3BGVideoYoutubeMultiPage from "@/pages/homes/home-3/bg-video-youtube/brutalist-multi-page-bg-video-youtube/page";
import Home3MainDemoOnepage from "@/pages/homes/home-3/main-demo/brutalist-one-page/page";
import Home3BGVideoOnepage from "@/pages/homes/home-3/bg-video/brutalist-one-page-bg-video/page";
import Home3BGVideoYoutubeOnepage from "@/pages/homes/home-3/bg-video-youtube/brutalist-one-page-bg-video-youtube/page";
import Home3BGVideoMultiPageDark from "@/pages/homes/home-3/bg-video/brutalist-multi-page-bg-video-dark/page";
import Home3BGVideoYoutubeMultiPageDark from "@/pages/homes/home-3/bg-video-youtube/brutalist-multi-page-bg-video-youtube-dark/page";
import Home3MainDemoOnepageDark from "@/pages/homes/home-3/main-demo/brutalist-multi-page-dark/page";
import Home3BGVideoOnepageDark from "@/pages/homes/home-3/bg-video/brutalist-one-page-bg-video-dark/page";
import Home3BGVideoYoutubeOnepageDark from "@/pages/homes/home-3/bg-video-youtube/brutalist-one-page-bg-video-youtube-dark/page";
import Home3MainDemoMultipageDark from "@/pages/homes/home-3/main-demo/brutalist-multi-page-dark/page";
import Home4MainDemoMultiPage from "@/pages/homes/home-4/main-demo/corporate-multi-page/page";
import Home4ImageParallaxMultiPage from "@/pages/homes/home-4/image-parallax/corporate-multi-page-image-parallax/page";
import Home4BGVideoMultiPage from "@/pages/homes/home-4/bg-video/corporate-multi-page-bg-video/page";
import Home4SplitMultiPage from "@/pages/homes/home-4/split/corporate-multi-page-split/page";
import Home4MainDemoOnepage from "@/pages/homes/home-4/main-demo/corporate-one-page/page";
import Home4ImageParallaxOnepage from "@/pages/homes/home-4/image-parallax/corporate-one-page-image-parallax/page";
import Home4BGVideoOnepage from "@/pages/homes/home-4/bg-video/corporate-one-page-bg-video/page";
import Home4SplitOnepage from "@/pages/homes/home-4/split/corporate-one-page-split/page";
import Home4MainDemoMultiPageDark from "@/pages/homes/home-4/main-demo/corporate-multi-page-dark/page";
import Home4ImageParallaxMultiPageDark from "@/pages/homes/home-4/image-parallax/corporate-multi-page-image-parallax-dark/page";
import Home4BGVideoMultiPageDark from "@/pages/homes/home-4/bg-video/corporate-multi-page-bg-video-dark/page";
import Home4SplitMultiPageDark from "@/pages/homes/home-4/split/corporate-multi-page-split-dark/page";
import Home4MainDemoOnepageDark from "@/pages/homes/home-4/main-demo/corporate-one-page-dark/page";
import Home4ImageParallaxOnepageDark from "@/pages/homes/home-4/image-parallax/corporate-one-page-image-parallax-dark/page";
import Home4BGVideoOnepageDark from "@/pages/homes/home-4/bg-video/corporate-one-page-bg-video-dark/page";
import Home4SplitOnepageDark from "@/pages/homes/home-4/split/corporate-one-page-split-dark/page";
import Home5MainDemoMultiPage from "@/pages/homes/home-5/main-demo/elegant-multi-page/page";
import Home5BGVideoMultiPage from "@/pages/homes/home-5/bg-video/elegant-multi-page-bg-video/page";
import Home5SplitMultiPage from "@/pages/homes/home-5/split/elegant-multi-page-split/page";
import Home5MainDemoOnepage from "@/pages/homes/home-5/main-demo/elegant-one-page/page";
import Home5BGVideoOnepage from "@/pages/homes/home-5/bg-video/elegant-one-page-bg-video/page";
import Home5SplitOnepage from "@/pages/homes/home-5/split/elegant-one-page-split/page";
import Home5MainDemoMultiPageDark from "@/pages/homes/home-5/main-demo/elegant-multi-page-dark/page";
import Home5BGVideoMultiPageDark from "@/pages/homes/home-5/bg-video/elegant-multi-page-bg-video-dark/page";
import Home5SplitMultiPageDark from "@/pages/homes/home-5/split/elegant-multi-page-split-dark/page";
import Home5MainDemoOnepageDark from "@/pages/homes/home-5/main-demo/elegant-one-page-dark/page";
import Home5BGVideoOnepageDark from "@/pages/homes/home-5/bg-video/elegant-one-page-bg-video-dark/page";
import Home5SplitOnepageDark from "@/pages/homes/home-5/split/elegant-one-page-split-dark/page";
import Home6MainDemoMultiPage from "@/pages/homes/home-6/main-demo/fancy-multi-page/page";
import Home6ImageParallaxMultiPage from "@/pages/homes/home-6/image-parallax/fancy-multi-page-image-parallax/page";
import Home6BGVideoMultiPage from "@/pages/homes/home-6/bg-video/fancy-multi-page-bg-video/page";
import Home6MainDemoOnepage from "@/pages/homes/home-6/main-demo/fancy-one-page/page";
import Home6ImageParallaxOnepage from "@/pages/homes/home-6/image-parallax/fancy-one-page-image-parallax/page";
import Home6BGVideoOnepage from "@/pages/homes/home-6/bg-video/fancy-one-page-bg-video/page";
import Home6MainDemoMultiPageDark from "@/pages/homes/home-6/main-demo/fancy-multi-page-dark/page";
import Home6ImageParallaxMultiPageDark from "@/pages/homes/home-6/image-parallax/fancy-multi-page-image-parallax-dark/page";
import Home6BGVideoMultiPageDark from "@/pages/homes/home-6/bg-video/fancy-multi-page-bg-video-dark/page";
import Home6MainDemoOnepageDark from "@/pages/homes/home-6/main-demo/fancy-one-page-dark/page";
import Home6ImageParallaxOnepageDark from "@/pages/homes/home-6/image-parallax/fancy-one-page-image-parallax-dark/page";
import Home6BGVideoOnepageDark from "@/pages/homes/home-6/bg-video/fancy-one-page-bg-video-dark/page";
import Home7MainDemoMultiPage from "@/pages/homes/home-7/main-demo/gradient-multi-page/page";
import Home7ImageParallax1MultiPage from "@/pages/homes/home-7/image-parallax-1/gradient-multi-page-image-parallax-1/page";
import Home7ImageParallax2MultiPage from "@/pages/homes/home-7/image-parallax-2/gradient-multi-page-image-parallax-2/page";
import Home7BGVideoMultiPage from "@/pages/homes/home-7/bg-video/gradient-multi-page-bg-video/page";
import Home7MainDemoOnepage from "@/pages/homes/home-7/main-demo/gradient-one-page/page";
import Home7ImageParallax1Onepage from "@/pages/homes/home-7/image-parallax-1/gradient-one-page-image-parallax-1/page";
import Home7ImageParallax2Onepage from "@/pages/homes/home-7/image-parallax-2/gradient-one-page-image-parallax-2/page";
import Home7BGVideoOnepage from "@/pages/homes/home-7/bg-video/gradient-one-page-bg-video/page";
import Home7MainDemoMultiPageDark from "@/pages/homes/home-7/main-demo/gradient-multi-page-dark/page";
import Home7ImageParallax1MultiPageDark from "@/pages/homes/home-7/image-parallax-1/gradient-multi-page-image-parallax-1-dark/page";
import Home7ImageParallax2MultiPageDark from "@/pages/homes/home-7/image-parallax-2/gradient-multi-page-image-parallax-2-dark/page";
import Home7BGVideoMultiPageDark from "@/pages/homes/home-7/bg-video/gradient-multi-page-bg-video-dark/page";
import Home7MainDemoOnepageDark from "@/pages/homes/home-7/main-demo/gradient-one-page-dark/page";
import Home7ImageParallax1OnepageDark from "@/pages/homes/home-7/image-parallax-1/gradient-one-page-image-parallax-1-dark/page";
import Home7ImageParallax2OnepageDark from "@/pages/homes/home-7/image-parallax-2/gradient-one-page-image-parallax-2-dark/page";
import Home7BGVideoOnepageDark from "@/pages/homes/home-7/bg-video/gradient-one-page-bg-video-dark/page";
import Home8MainDemoMultiPage from "@/pages/homes/home-8/main-demo/modern-multi-page/page";
import Home8ImageParallax1MultiPage from "@/pages/homes/home-8/image-parallax-1/modern-multi-page-image-parallax-1/page";
import Home8ImageParallax2MultiPage from "@/pages/homes/home-8/image-parallax-2/modern-multi-page-image-parallax-2/page";
import Home8TypedTextMultiPage from "@/pages/homes/home-8/typed-text/modern-multi-page-typed-text/page";
import Home8BGVideoMultiPage from "@/pages/homes/home-8/bg-video/modern-multi-page-bg-video/page";
import Home8MainDemoOnepage from "@/pages/homes/home-8/main-demo/modern-one-page/page";
import Home8ImageParallax1Onepage from "@/pages/homes/home-8/image-parallax-1/modern-one-page-image-parallax-1/page";
import Home8ImageParallax2Onepage from "@/pages/homes/home-8/image-parallax-2/modern-one-page-image-parallax-2/page";
import Home8TypedTextOnepage from "@/pages/homes/home-8/typed-text/modern-one-page-typed-text/page";
import Home8BGVideoOnepage from "@/pages/homes/home-8/bg-video/modern-one-page-bg-video/page";
import Home8MainDemoMultiPageDark from "@/pages/homes/home-8/main-demo/modern-multi-page-dark/page";
import Home8ImageParallax1MultiPageDark from "@/pages/homes/home-8/image-parallax-1/modern-multi-page-image-parallax-1-dark/page";
import Home8ImageParallax2MultiPageDark from "@/pages/homes/home-8/image-parallax-2/modern-multi-page-image-parallax-2-dark/page";
import Home8TypedTextMultiPageDark from "@/pages/homes/home-8/typed-text/modern-multi-page-typed-text-dark/page";
import Home8BGVideoMultiPageDark from "@/pages/homes/home-8/bg-video/modern-multi-page-bg-video-dark/page";
import Home8MainDemoOnepageDark from "@/pages/homes/home-8/main-demo/modern-one-page-dark/page";
import Home8ImageParallax1OnepageDark from "@/pages/homes/home-8/image-parallax-1/modern-one-page-image-parallax-1-dark/page";
import Home8ImageParallax2OnepageDark from "@/pages/homes/home-8/image-parallax-2/modern-one-page-image-parallax-2-dark/page";
import Home8TypedTextOnepageDark from "@/pages/homes/home-8/typed-text/modern-one-page-typed-text-dark/page";
import Home8BGVideoOnepageDark from "@/pages/homes/home-8/bg-video/modern-one-page-bg-video-dark/page";
import Home9MainDemoMultiPage from "@/pages/homes/home-9/main-demo/slick-multi-page/page";
import Home9SplitMultiPage from "@/pages/homes/home-9/split/slick-multi-page-split/page";
import Home9MainDemoOnepage from "@/pages/homes/home-9/main-demo/slick-one-page/page";
import Home9SplitOnepage from "@/pages/homes/home-9/split/slick-one-page-split/page";
import Home9MainDemoOnepageDark from "@/pages/homes/home-9/main-demo/slick-one-page-dark/page";
import Home9SplitOnepageDark from "@/pages/homes/home-9/split/slick-one-page-split-dark/page";
import Home10MainDemoMultiPage from "@/pages/homes/home-10/main-deno/strong-multi-page/page";
import Home10ImageParallaxMultiPage from "@/pages/homes/home-10/image-parallax/strong-multi-page-image-parallax/page";
import Home10BGVideoMultiPage from "@/pages/homes/home-10/bg-video/strong-multi-page-bg-video/page";
import Home10MainDemoOnepage from "@/pages/homes/home-10/main-deno/strong-one-page/page";
import Home10ImageParallaxOnepage from "@/pages/homes/home-10/image-parallax/strong-one-page-image-parallax/page";
import Home10BGVideoOnepage from "@/pages/homes/home-10/bg-video/strong-one-page-bg-video/page";
import Home10MainDemoMultiPageDark from "@/pages/homes/home-10/main-deno/strong-multi-page-dark/page";
import Home10ImageParallaxMultiPageDark from "@/pages/homes/home-10/image-parallax/strong-multi-page-image-parallax-dark/page";
import Home10BGVideoMultiPageDark from "@/pages/homes/home-10/bg-video/strong-multi-page-bg-video-dark/page";
import Home10MainDemoOnepageDark from "@/pages/homes/home-10/main-deno/strong-one-page-dark/page";
import Home10ImageParallaxOnepageDark from "@/pages/homes/home-10/image-parallax/strong-one-page-image-parallax-dark/page";
import Home10BGVideoOnepageDark from "@/pages/homes/home-10/bg-video/strong-one-page-bg-video-dark/page";
import MainPortfolioPageBoxed2Col from "./pages/portfolio/main-portfolio-boxed-2col/page";
import MainPortfolioPageBoxed3Col from "./pages/portfolio/main-portfolio-boxed-3col/page";
import MainPortfolioPageBoxed4Col from "./pages/portfolio/main-portfolio-boxed-4col/page";
import MainPortfolioPageWide2Col from "./pages/portfolio/main-portfolio-wide-2col/page";
import MainPortfolioPageWide3Col from "./pages/portfolio/main-portfolio-wide-3col/page";
import MainPortfolioPageWide4Col from "./pages/portfolio/main-portfolio-wide-4col/page";
import MainPortfolioPageMasonry2Col from "./pages/portfolio/main-portfolio-masonry-2col/page";
import MainPortfolioPageMasonry3Col from "./pages/portfolio/main-portfolio-masonry-3col/page";
import MainPortfolioPageMasonry4Col from "./pages/portfolio/main-portfolio-masonry-4col/page";
import MainPortfolioSinglePage1 from "./pages/portfolio-single/main-portfolio-single-1/page";
import MainPortfolioSinglePage2 from "./pages/portfolio-single/main-portfolio-single-2/page";
import MainPortfolioSinglePage3 from "./pages/portfolio-single/main-portfolio-single-3/page";
import MainPortfolioPageLazyload from "./pages/portfolio/main-portfolio-lazyload/page";
import MainPortfolioPageBoxed2ColDark from "./pages/portfolio/main-portfolio-boxed-2col-dark/page";
import MainPortfolioPageBoxed3ColDark from "./pages/portfolio/main-portfolio-boxed-3col-dark/page";
import MainPortfolioPageBoxed4ColDark from "./pages/portfolio/main-portfolio-boxed-4col-dark/page";
import MainPortfolioPageWide2ColDark from "./pages/portfolio/main-portfolio-wide-2col-dark/page";
import MainPortfolioPageWide3ColDark from "./pages/portfolio/main-portfolio-wide-3col-dark/page";
import MainPortfolioPageWide4ColDark from "./pages/portfolio/main-portfolio-wide-4col-dark/page";
import MainPortfolioPageLazyloadDark from "./pages/portfolio/main-portfolio-lazyload-dark/page";
import MainPortfolioPageMasonry2ColDark from "./pages/portfolio/main-portfolio-masonry-2col-dark/page";
import MainPortfolioPageMasonry3ColDark from "./pages/portfolio/main-portfolio-masonry-3col-dark/page";
import MainPortfolioPageMasonry4ColDark from "./pages/portfolio/main-portfolio-masonry-4col-dark/page";
import MainPortfolioSinglePage1Dark from "./pages/portfolio-single/main-portfolio-single-1-dark/page";
import MainPortfolioSinglePage2Dark from "./pages/portfolio-single/main-portfolio-single-2-dark/page";
import MainPortfolioSinglePage3Dark from "./pages/portfolio-single/main-portfolio-single-3-dark/page";
import MainBlogClassicPageSidebarLeft from "./pages/blogs/main-blog-classic-sidebar-left/page";
import MainBlogClassicPageSidebarRight from "./pages/blogs/main-blog-classic-sidebar-right/page";
import MainBlogClassicPageFullWidth from "./pages/blogs/main-blog-classic-fullwidth/page";
import MainBlogColumnsPage2Col from "./pages/blogs/main-blog-columns-2col/page";
import MainBlogColumnsPage3Col from "./pages/blogs/main-blog-columns-3col/page";
import MainBlogSinglePageSIdebarLeft from "./pages/blog-single/main-blog-single-sidebar-left/page";
import MainBlogSinglePageSidebarRight from "./pages/blog-single/main-blog-single-sidebar-right/page";
import MainBlogSinglePageFullWidth from "./pages/blog-single/main-blog-single-fullwidth/page";
import MainBlogClassicPageSidebarLeftDark from "./pages/blogs/main-blog-classic-sidebar-left-dark/page";
import MainBlogClassicPageSidebarRightDark from "./pages/blogs/main-blog-classic-sidebar-right-dark/page";
import MainBlogClassicPageFullWidthDark from "./pages/blogs/main-blog-classic-fullwidth-dark/page";
import MainBlogColumnsPage2ColDark from "./pages/blogs/main-blog-columns-2col-dark/page";
import MainBlogColumnsPage3ColDark from "./pages/blogs/main-blog-columns-3col-dark/page";
import MainBlogSinglePageSIdebarLeftDark from "./pages/blog-single/main-blog-single-sidebar-left-dark/page";
import MainBlogSinglePageSidebarRightDark from "./pages/blog-single/main-blog-single-sidebar-right-dark/page";
import MainBlogSinglePageFullWidthDark from "./pages/blog-single/main-blog-single-fullwidth-dark/page";
import ElementPageAccordion from "./pages/elements/main-elements-accordions/page";
import ElementPageAlertMessage from "./pages/elements/main-elements-alert-messages/page";
import ElementPageAnimation from "./pages/elements/main-elements-animation/page";
import ElementPageBars from "./pages/elements/main-elements-bars/page";
import ElementPageButtons from "./pages/elements/main-elements-buttons/page";
import ElementPageCookieBanner from "./pages/elements/main-elements-cookie-banner/page";
import ElementPageFeatures from "./pages/elements/main-elements-features/page";
import ElementPageForms from "./pages/elements/main-elements-forms/page";
import ElementPageGrid from "./pages/elements/main-elements-grid/page";
import ElementPageIconsBrands from "./pages/elements/main-elements-icons-brands/page";
import ElementPageIconIconmonstr from "./pages/elements/main-elements-icons-iconmonstr/page";
import ElementPageIconsLonicons from "./pages/elements/main-elements-icons-Ionicons/page";
import ElementPageIconsMonicons from "./pages/elements/main-elements-icons-monoicons/page";
import ElementPageImageLazyLoad from "./pages/elements/main-elements-images-lazyload/page";
import ElementPageLightbox from "./pages/elements/main-elements-lightbox/page";
import ElementPageSlider from "./pages/elements/main-elements-sliders/page";
import ElementPageSliderLazyload from "./pages/elements/main-elements-sliders-lazyload/page";
import ElementPageTabs from "./pages/elements/main-elements-tabs/page";
import ElementPageTooltips from "./pages/elements/main-elements-tooltips/page";
import ElementPageTypography from "./pages/elements/main-elements-typography/page";
import ElementPageVideoSound from "./pages/elements/main-elements-video-sound/page";
import ElementPageAccordionDark from "./pages/elements/main-elements-accordions-dark/page";
import ElementPageAlertMessageDark from "./pages/elements/main-elements-alert-messages-dark/page";
import ElementPageAnimationDark from "./pages/elements/main-elements-animation-dark/page";
import ElementPageBarsDark from "./pages/elements/main-elements-bars-dark/page";
import ElementPageButtonsDark from "./pages/elements/main-elements-buttons-dark/page";
import ElementPageCookieBannerDark from "./pages/elements/main-elements-cookie-banner-dark/page";
import ElementPageFeaturesDark from "./pages/elements/main-elements-features-dark/page";
import ElementPageFormsDark from "./pages/elements/main-elements-forms-dark/page";
import ElementPageGridDark from "./pages/elements/main-elements-grid-dark/page";
import ElementPageIconsBrandsDark from "./pages/elements/main-elements-icons-brands-dark/page";
import ElementPageIconIconmonstrDark from "./pages/elements/main-elements-icons-iconmonstr-dark/page";
import ElementPageIconsLoniconsDark from "./pages/elements/main-elements-icons-Ionicons-dark/page";
import ElementPageIconsMoniconsDark from "./pages/elements/main-elements-icons-monoicons-dark/page";
import ElementPageImageLazyLoadDark from "./pages/elements/main-elements-images-lazyload-dark/page";
import ElementPageLightboxDark from "./pages/elements/main-elements-lightbox-dark/page";
import ElementPageSliderDark from "./pages/elements/main-elements-sliders-dark/page";
import ElementPageSliderLazyloadDark from "./pages/elements/main-elements-sliders-lazyload-dark/page";
import ElementPageTabsDark from "./pages/elements/main-elements-tabs-dark/page";
import ElementPageTooltipsDark from "./pages/elements/main-elements-tooltips-dark/page";
import ElementPageTypographyDark from "./pages/elements/main-elements-typography-dark/page";
import ElementPageVideoSoundDark from "./pages/elements/main-elements-video-sound-dark/page";
import MainPageAbout1 from "./pages/about/main-pages-about-1/page";
import MainAboutPage2 from "./pages/about/main-pages-about-2/page";
import MainAboutPage3 from "./pages/about/main-pages-about-3/page";
import MainServicesPage1 from "./pages/services/main-pages-services-1/page";
import MainServicesPage2 from "./pages/services/main-pages-services-2/page";
import MainServicesPage3 from "./pages/services/main-pages-services-3/page";
import MainPageClients from "./pages/otherPages/main-pages-clients/page";
import MainPageTeam from "./pages/otherPages/main-pages-team/page";
import MainPageFaq1 from "./pages/otherPages/main-pages-faq-1/page";
import MainPageFaq2 from "./pages/otherPages/main-pages-faq-2/page";
import MainPagePricing1 from "./pages/otherPages/main-pages-pricing-1/page";
import MainPagePricing2 from "./pages/otherPages/main-pages-pricing-2/page";
import MainPageContact1 from "./pages/otherPages/main-pages-contact-1/page";
import MainPageContact2 from "./pages/otherPages/main-pages-contact-2/page";
import MainPageGalleryCol1 from "./pages/otherPages/main-pages-gallery-1col/page";
import MainPageGalleryCol2 from "./pages/otherPages/main-pages-gallery-2col/page";
import MainPageGalleryCol3 from "./pages/otherPages/main-pages-gallery-3col/page";
import MainPageGalleryCol4 from "./pages/otherPages/main-pages-gallery-4col/page";
import MainPageUnderConstraction from "./pages/otherPages/main-pages-under-construction/page";
import MainPageAccount from "./pages/otherPages/main-pages-account/page";
import MainPageNotFound from "./pages/otherPages/main-pages-404/page";
import MainPageAbout1Dark from "./pages/about/main-pages-about-1-dark/page";
import MainAboutPage2Dark from "./pages/about/main-pages-about-2-dark/page";
import MainAboutPage3Dark from "./pages/about/main-pages-about-3-dark/page";
import MainServicesPage1Dark from "./pages/services/main-pages-services-1-dark/page";
import MainServicesPage2Dark from "./pages/services/main-pages-services-2-dark/page";
import MainServicesPage3Dark from "./pages/services/main-pages-services-3-dark/page";
import MainPageClientDark from "./pages/otherPages/main-pages-clients-dark/page";
import MainPageTeamDark from "./pages/otherPages/main-pages-team-dark/page";
import MainPageFaq1Dark from "./pages/otherPages/main-pages-faq-1-dark/page";
import MainPageFaq2Dark from "./pages/otherPages/main-pages-faq-2-dark/page";
import MainPagePricing1Dark from "./pages/otherPages/main-pages-pricing-1-dark/page";
import MainPagePricing2Dark from "./pages/otherPages/main-pages-pricing-2-dark/page";
import MainPageContact1Dark from "./pages/otherPages/main-pages-contact-1-dark/page";
import MainPageContact2Dark from "./pages/otherPages/main-pages-contact-2-dark/page";
import MainPageGalleryCol1Dark from "./pages/otherPages/main-pages-gallery-1col-dark/page";
import MainPageGalleryCol2Dark from "./pages/otherPages/main-pages-gallery-2col-dark/page";
import MainPageGalleryCol3Dark from "./pages/otherPages/main-pages-gallery-3col-dark/page";
import MainPageGalleryCol4Dark from "./pages/otherPages/main-pages-gallery-4col-dark/page";
import MainPageAccountDark from "./pages/otherPages/main-pages-account-dark/page";
import BoldAboutPage from "./pages/about/bold-about/page";
import BoldServicesPage from "./pages/services/bold-services/page";
import BoldPortfolioPage from "./pages/portfolio/bold-portfolio/page";
import BoldBlogPage from "./pages/blogs/bold-blog/page";
import BoldContactPage from "./pages/contact/bold-contact/page";
import BoldPortfolioSinglePage from "./pages/portfolio-single/bold-portfolio-single/page";
import BoldBlogSinglePage from "./pages/blog-single/bold-blog-single/page";
import BoldAboutPageDark from "./pages/about/bold-about-dark/page";
import BoldServicesPageDark from "./pages/services/bold-services-dark/page";
import BoldPortfolioPageDark from "./pages/portfolio/bold-portfolio-dark/page";
import BoldPortfolioSinglePageDark from "./pages/portfolio-single/bold-portfolio-single-dark/page";
import BoldBlogPageDark from "./pages/blogs/bold-blog-dark/page";
import BoldBlogSinglePageDark from "./pages/blog-single/bold-blog-single-dark/page";
import BoldContactPageDark from "./pages/contact/bold-contact-dark/page";
import BrutalistAboutPage from "./pages/about/brutalist-about/page";
import BrutalistServicesPage from "./pages/services/brutalist-services/page";
import BrutalistPortfolioSinglePage from "./pages/portfolio-single/brutalist-portfolio-single/page";
import BrutalistPortfolioPage from "./pages/portfolio/brutalist-portfolio/page";
import BrutalistBlogPage from "./pages/blogs/brutalist-blog/page";
import BrutalistBlogSinglePage from "./pages/blog-single/brutalist-blog-single/page";
import BrutalistContactPage from "./pages/contact/brutalist-contact/page";
import BrutalistAboutPageDark from "./pages/about/brutalist-about-dark/page";
import BrutalistServicesPageDark from "./pages/services/brutalist-services-dark/page";
import BrutalistPortfolioPageDark from "./pages/portfolio/brutalist-portfolio-dark/page";
import BrutalistPortfolioSinglePageDark from "./pages/portfolio-single/brutalist-portfolio-single-dark/page";
import BrutalistBlogPageDark from "./pages/blogs/brutalist-blog-dark/page";
import BrutalistBlogSinglePageDark from "./pages/blog-single/brutalist-blog-single-dark/page";
import BrutalistContactPageDark from "./pages/contact/brutalist-contact-dark/page";
import CorporateAboutPage from "./pages/about/corporate-about/page";
import CorporateServicesPage from "./pages/services/corporate-services/page";
import CorporatePortfolioPage from "./pages/portfolio/corporate-portfolio/page";
import CorporateBlogPage from "./pages/blogs/corporate-blog/page";
import CorporatePortfolioSinglePage from "./pages/portfolio-single/corporate-portfolio-single/page";
import CorporateBlogSinglePage from "./pages/blog-single/corporate-blog-single/page";
import CorporateContactPage from "./pages/contact/corporate-contact/page";
import CorporateAboutPageDark from "./pages/about/corporate-about-dark/page";
import CorporateServicesPageDark from "./pages/services/corporate-services-dark/page";
import CorporatePortfolioPageDark from "./pages/portfolio/corporate-portfolio-dark/page";
import CorporateBlogPageDark from "./pages/blogs/corporate-blog-dark/page";
import CorporatePortfolioSinglePageDark from "./pages/portfolio-single/corporate-portfolio-single-dark/page";
import CorporateBlogSinglePageDark from "./pages/blog-single/corporate-blog-single-dark/page";
import CorporateContactPageDark from "./pages/contact/corporate-contact-dark/page";
import ElegantAboutPage from "./pages/about/elegant-about/page";
import ElegantServicesPage from "./pages/services/elegant-services/page";
import ElegantPortfolioPage from "./pages/portfolio/elegant-portfolio/page";
import ElegantBlogPage from "./pages/blogs/elegant-blog/page";
import ElegantPortfolioSinglePage from "./pages/portfolio-single/elegant-portfolio-single/page";
import ElegantBlogSinglePage from "./pages/blog-single/elegant-blog-single/page";
import ElegantContactPage from "./pages/contact/elegant-contact/page";
import ElegantAboutPageDark from "./pages/about/elegant-about-dark/page";
import ElegantServicesPageDark from "./pages/services/elegant-services-dark/page";
import ElegantPortfolioPageDark from "./pages/portfolio/elegant-portfolio-dark/page";
import ElegantBlogPageDark from "./pages/blogs/elegant-blog-dark/page";
import ElegantPortfolioSinglePageDark from "./pages/portfolio-single/elegant-portfolio-single-dark/page";
import ElegantBlogSinglePageDark from "./pages/blog-single/elegant-blog-single-dark/page";
import ElegantContactPageDark from "./pages/contact/elegant-contact-dark/page";
import FancyAboutPage from "./pages/about/fancy-about/page";
import FancyServicesPage from "./pages/services/fancy-services/page";
import FancyPortfolioPage from "./pages/portfolio/fancy-portfolio/page";
import FancyBlogPage from "./pages/blogs/fancy-blog/page";
import FancyPortfolioSinglePage from "./pages/portfolio-single/fancy-portfolio-single/page";
import FancyBlogSinglePage from "./pages/blog-single/fancy-blog-single/page";
import FancyContactPage from "./pages/contact/fancy-contact/page";
import FancyAboutPageDark from "./pages/about/fancy-about-dark/page";
import FancyServicesPageDark from "./pages/services/fancy-services-dark/page";
import FancyPortfolioPageDark from "./pages/portfolio/fancy-portfolio-dark/page";
import FancyBlogPageDark from "./pages/blogs/fancy-blog-dark/page";
import FancyPortfolioSinglePageDark from "./pages/portfolio-single/fancy-portfolio-single-dark/page";
import FancyBlogSinglePageDark from "./pages/blog-single/fancy-blog-single-dark/page";
import FancyContactPageDark from "./pages/contact/fancy-contact-dark/page";
import GradientAboutPage from "./pages/about/gradient-about/page";
import GradientServicesPage from "./pages/services/gradient-services/page";
import GradientPortfolioPage from "./pages/portfolio/gradient-portfolio/page";
import GradientBlogPage from "./pages/blogs/gradient-blog/page";
import GradientPortfolioSinglePage from "./pages/portfolio-single/gradient-portfolio-single/page";
import GradientBlogSinglePage from "./pages/blog-single/gradient-blog-single/page";
import GradientContactPage from "./pages/contact/gradient-contact/page";
import GradientAboutPageDark from "./pages/about/gradient-about-dark/page";
import GradientServicesPageDark from "./pages/services/gradient-services-dark/page";
import GradientPortfolioPageDark from "./pages/portfolio/gradient-portfolio-dark/page";
import GradientBlogPageDark from "./pages/blogs/gradient-blog-dark/page";
import GradientPortfolioSinglePageDark from "./pages/portfolio-single/gradient-portfolio-single-dark/page";
import GradientBlogSinglePageDark from "./pages/blog-single/gradient-blog-single-dark/page";
import GradientContactPageDark from "./pages/contact/gradient-contact-dark/page";
import ModernAboutPage from "./pages/about/modern-about/page";
import ModernServicesPage from "./pages/services/modern-services/page";
import ModernPortfolioPage from "./pages/portfolio/modern-portfolio/page";
import ModernBlogPage from "./pages/blogs/modern-blog/page";
import ModernPortfolioSinglePage from "./pages/portfolio-single/modern-portfolio-single/page";
import ModernBlogSinglePage from "./pages/blog-single/modern-blog-single/page";
import ModernContactPage from "./pages/contact/modern-contact/page";
import SlickAboutPage from "./pages/about/slick-about/page";
import SlickServicesPage from "./pages/services/slick-services/page";
import SlickPortfolioPage from "./pages/portfolio/slick-portfolio/page";
import SlickBlogPage from "./pages/blogs/slick-blog/page";
import SlickPortfolioSinglePage from "./pages/portfolio-single/slick-portfolio-single/page";
import SlickBlogSinglePage from "./pages/blog-single/slick-blog-single/page";
import SlickContactPage from "./pages/contact/slick-contact/page";
import SlickAboutPageDark from "./pages/about/slick-about-dark/page";
import SlickServicesPageDark from "./pages/services/slick-services-dark/page";
import SlickPortfolioPageDark from "./pages/portfolio/slick-portfolio-dark/page";
import SlickBlogPageDark from "./pages/blogs/slick-blog-dark/page";
import SlickPortfolioSinglePageDark from "./pages/portfolio-single/slick-portfolio-single-dark/page";
import SlickBlogSinglePageDark from "./pages/blog-single/slick-blog-single-dark/page";
import SlickContactPageDark from "./pages/contact/slick-contact-dark/page";
import StrongAboutPage from "./pages/about/strong-about/page";
import StrongServicesPage from "./pages/services/strong-services/page";
import StrongPortfolioPage from "./pages/portfolio/strong-portfolio/page";
import StrongBlogPage from "./pages/blogs/strong-blog/page";
import StrongPortfolioSinglePage from "./pages/portfolio-single/strong-portfolio-single/page";
import StrongBlogSinglePage from "./pages/blog-single/strong-blog-single/page";
import StrongContactPage from "./pages/contact/strong-contact/page";
import StrongAboutPageDark from "./pages/about/strong-about-dark/page";
import StrongServicesPageDark from "./pages/services/strong-services-dark/page";
import StrongPortfolioPageDark from "./pages/portfolio/strong-portfolio-dark/page";
import StrongBlogPageDark from "./pages/blogs/strong-blog-dark/page";
import StrongPortfolioSinglePageDark from "./pages/portfolio-single/strong-portfolio-single-dark/page";
import StrongBlogSinglePageDark from "./pages/blog-single/strong-blog-single-dark/page";
import StrongContactPageDark from "./pages/contact/strong-contact-dark/page";
import ElementPageHeaderDarkLight from "./pages/elements/main-elements-header-dark-light/page";
import ElementPageHeaderDarkTransparent from "./pages/elements/main-elements-header-dark-transparent/page";
import ElementPageHeaderWhite from "./pages/elements/main-elements-header-white/page";
import ElementPageHeaderWhiteAfterScroll from "./pages/elements/main-elements-header-white-after-scroll/page";
import ElementPageHeaderWhiteTransparent from "./pages/elements/main-elements-header-white-transparent/page";
import ElementPageHeaderDarkTransparentDark from "./pages/elements/main-elements-header-dark-transparent-dark/page";
import ElementPageHeaderWhiteAfterScrollDark from "./pages/elements/main-elements-header-white-after-scroll-dark/page";
import ElementPageHeaderDarkDark from "./pages/elements/main-elements-header-dark/page";
import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    init_wow();
    parallaxMouseMovement();
    var mainNav = document.querySelector(".main-nav");
    if (mainNav?.classList.contains("transparent")) {
      mainNav.classList.add("js-transparent");
    } else if (!mainNav?.classList?.contains("dark")) {
      mainNav?.classList.add("js-no-transparent-white");
    }

    window.addEventListener("scroll", headerChangeOnScroll);
    parallaxScroll();
    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, [pathname]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home1MainDemoOnepage />} />
          {/* main multipage */}
          <Route path="main-multi-page" element={<Home1MainDemoMultiPage />} />
          <Route
            path="main-multi-page-typed-text"
            element={<Home1TypedTextMultiPage />}
          />
          <Route
            path="main-multi-page-image-parallax"
            element={<Home1ImageParallaxMultiPage />}
          />
          <Route
            path="main-multi-page-slider-fullscreen"
            element={<Home1SliderFullscreenMultiPage />}
          />
          <Route
            path="main-multi-page-slider-background"
            element={<Home1SliderBackgroundMultiPage />}
          />
          <Route
            path="main-multi-page-bg-video"
            element={<Home1BGVideoMultiPage />}
          />
          <Route
            path="main-multi-page-bg-video-youtube"
            element={<Home1BGVideoYoutubeMultiPage />}
          />
          {/* main multipage dark */}
          <Route
            path="main-multi-page-dark"
            element={<Home1MainDemoMultiPageDark />}
          />
          <Route
            path="main-multi-page-typed-text-dark"
            element={<Home1TypedTextMultiPageDark />}
          />
          <Route
            path="main-multi-page-image-parallax-dark"
            element={<Home1ImageParallaxMultiPageDark />}
          />
          <Route
            path="main-multi-page-slider-fullscreen-dark"
            element={<Home1SliderFullscreenMultiPageDark />}
          />
          <Route
            path="main-multi-page-slider-background-dark"
            element={<Home1SliderBackgroundMultiPageDark />}
          />
          <Route
            path="main-multi-page-bg-video-dark"
            element={<Home1BGVideoMultiPageDark />}
          />
          <Route
            path="main-multi-page-bg-video-youtube-dark"
            element={<Home1BGVideoYoutubeMultiPage />}
          />
          {/* main onepage */}

          <Route path="main-one-page" element={<Home1MainDemoOnepage />} />
          <Route
            path="main-one-page-typed-text"
            element={<Home1TypedTextOnepage />}
          />
          <Route
            path="main-one-page-image-parallax"
            element={<Home1ImageParallaxOnepage />}
          />
          <Route
            path="main-one-page-slider-fullscreen"
            element={<Home1SliderFullscreenOnepage />}
          />
          <Route
            path="main-one-page-slider-background"
            element={<Home1SliderBackgroundOnepage />}
          />
          <Route
            path="main-one-page-bg-video"
            element={<Home1BGVideoOnepage />}
          />
          <Route
            path="main-one-page-bg-video-youtube"
            element={<Home1BGVideoYoutubeOnepage />}
          />
          {/* main onepage dark */}

          <Route
            path="main-one-page-dark"
            element={<Home1MainDemoOnepageDark />}
          />
          <Route
            path="main-one-page-typed-text-dark"
            element={<Home1TypedTextOnepageDark />}
          />
          <Route
            path="main-one-page-image-parallax-dark"
            element={<Home1ImageParallaxOnepageDark />}
          />
          <Route
            path="main-one-page-slider-fullscreen-dark"
            element={<Home1SliderFullscreenOnepageDark />}
          />
          <Route
            path="main-one-page-slider-background-dark"
            element={<Home1SliderBackgroundOnepageDark />}
          />
          <Route
            path="main-one-page-bg-video-dark"
            element={<Home1BGVideoOnepageDark />}
          />
          <Route
            path="main-one-page-bg-video-youtube-dark"
            element={<Home1BGVideoYoutubeOnepageDark />}
          />

          {/* home 2 pages multipage */}
          <Route path="bold-multi-page" element={<Home2MainDemoMultiPage />} />
          <Route
            path="bold-multi-page-typed-text"
            element={<Home2TypedTextMultiPage />}
          />
          <Route
            path="bold-multi-page-bg-video"
            element={<Home2BGVideoMultiPage />}
          />
          {/* home 2 pages onetipage */}
          <Route path="bold-one-page" element={<Home2MainDemoOnepage />} />
          <Route
            path="bold-one-page-typed-text"
            element={<Home2TypedTextOnepage />}
          />
          <Route
            path="bold-one-page-bg-video"
            element={<Home2BGVideoOnepage />}
          />
          {/* home 2 pages multipage dark */}
          <Route
            path="bold-multi-page-dark"
            element={<Home2MainDemoMultiPageDark />}
          />
          <Route
            path="bold-multi-page-typed-text-dark"
            element={<Home2TypedTextMultiPageDark />}
          />
          <Route
            path="bold-multi-page-bg-video-dark"
            element={<Home2BGVideoMultiPageDark />}
          />
          {/* home 2 pages onetipage dark */}
          <Route
            path="bold-one-page-dark"
            element={<Home2MainDemoOnepageDark />}
          />
          <Route
            path="bold-one-page-typed-text-dark"
            element={<Home2TypedTextOnepageDark />}
          />
          <Route
            path="bold-one-page-bg-video-dark"
            element={<Home2BGVideoOnepageDark />}
          />

          {/* home3 pages multipage */}

          <Route
            path="brutalist-multi-page"
            element={<Home3MainDemoMultiPage />}
          />
          <Route
            path="brutalist-multi-page-bg-video"
            element={<Home3BGVideoMultiPage />}
          />
          <Route
            path="brutalist-multi-page-bg-video-youtube"
            element={<Home3BGVideoYoutubeMultiPage />}
          />
          {/* home3 pages onepage */}

          <Route path="brutalist-one-page" element={<Home3MainDemoOnepage />} />
          <Route
            path="brutalist-one-page-bg-video"
            element={<Home3BGVideoOnepage />}
          />
          <Route
            path="brutalist-one-page-bg-video-youtube"
            element={<Home3BGVideoYoutubeOnepage />}
          />

          {/* home3 pages multipage dark*/}

          <Route
            path="brutalist-multi-page-dark"
            element={<Home3MainDemoMultipageDark />}
          />
          <Route
            path="brutalist-multi-page-bg-video-dark"
            element={<Home3BGVideoMultiPageDark />}
          />
          <Route
            path="brutalist-multi-page-bg-video-youtube-dark"
            element={<Home3BGVideoYoutubeMultiPageDark />}
          />
          {/* home3 pages onepage dark*/}

          <Route
            path="brutalist-one-page-dark"
            element={<Home3MainDemoOnepageDark />}
          />
          <Route
            path="brutalist-one-page-bg-video-dark"
            element={<Home3BGVideoOnepageDark />}
          />
          <Route
            path="brutalist-one-page-bg-video-youtube-dark"
            element={<Home3BGVideoYoutubeOnepageDark />}
          />
          {/* home 4 multipage */}
          <Route
            path="corporate-multi-page"
            element={<Home4MainDemoMultiPage />}
          />
          <Route
            path="corporate-multi-page-image-parallax"
            element={<Home4ImageParallaxMultiPage />}
          />
          <Route
            path="corporate-multi-page-bg-video"
            element={<Home4BGVideoMultiPage />}
          />
          <Route
            path="corporate-multi-page-split"
            element={<Home4SplitMultiPage />}
          />
          {/* home 4 onepage */}
          <Route path="corporate-one-page" element={<Home4MainDemoOnepage />} />
          <Route
            path="corporate-one-page-image-parallax"
            element={<Home4ImageParallaxOnepage />}
          />
          <Route
            path="corporate-one-page-bg-video"
            element={<Home4BGVideoOnepage />}
          />
          <Route
            path="corporate-one-page-split"
            element={<Home4SplitOnepage />}
          />
          {/* home 4 multipage dark */}
          <Route
            path="corporate-multi-page-dark"
            element={<Home4MainDemoMultiPageDark />}
          />
          <Route
            path="corporate-multi-page-image-parallax-dark"
            element={<Home4ImageParallaxMultiPageDark />}
          />
          <Route
            path="corporate-multi-page-bg-video-dark"
            element={<Home4BGVideoMultiPageDark />}
          />
          <Route
            path="corporate-multi-page-split-dark"
            element={<Home4SplitMultiPageDark />}
          />
          {/* home 4 onepage dark */}
          <Route
            path="corporate-one-page-dark"
            element={<Home4MainDemoOnepageDark />}
          />
          <Route
            path="corporate-one-page-image-parallax-dark"
            element={<Home4ImageParallaxOnepageDark />}
          />
          <Route
            path="corporate-one-page-bg-video-dark"
            element={<Home4BGVideoOnepageDark />}
          />
          <Route
            path="corporate-one-page-split-dark"
            element={<Home4SplitOnepageDark />}
          />

          {/* home5 multipage */}
          <Route
            path="elegant-multi-page"
            element={<Home5MainDemoMultiPage />}
          />
          <Route
            path="elegant-multi-page-bg-video"
            element={<Home5BGVideoMultiPage />}
          />
          <Route
            path="elegant-multi-page-split"
            element={<Home5SplitMultiPage />}
          />
          {/* home5 onepage */}
          <Route path="elegant-one-page" element={<Home5MainDemoOnepage />} />
          <Route
            path="elegant-one-page-bg-video"
            element={<Home5BGVideoOnepage />}
          />
          <Route
            path="elegant-one-page-split"
            element={<Home5SplitOnepage />}
          />
          {/* home5 multipage dark */}
          <Route
            path="elegant-multi-page-dark"
            element={<Home5MainDemoMultiPageDark />}
          />
          <Route
            path="elegant-multi-page-bg-video-dark"
            element={<Home5BGVideoMultiPageDark />}
          />
          <Route
            path="elegant-multi-page-split-dark"
            element={<Home5SplitMultiPageDark />}
          />
          {/* home5 onepage dark */}
          <Route
            path="elegant-one-page-dark"
            element={<Home5MainDemoOnepageDark />}
          />
          <Route
            path="elegant-one-page-bg-video-dark"
            element={<Home5BGVideoOnepageDark />}
          />
          <Route
            path="elegant-one-page-split-dark"
            element={<Home5SplitOnepageDark />}
          />

          {/* home 6 multipage  */}

          <Route path="fancy-multi-page" element={<Home6MainDemoMultiPage />} />
          <Route
            path="fancy-multi-page-image-parallax"
            element={<Home6ImageParallaxMultiPage />}
          />
          <Route
            path="fancy-multi-page-bg-video"
            element={<Home6BGVideoMultiPage />}
          />
          {/* home 6 onepage  */}

          <Route path="fancy-one-page" element={<Home6MainDemoOnepage />} />
          <Route
            path="fancy-one-page-image-parallax"
            element={<Home6ImageParallaxOnepage />}
          />
          <Route
            path="fancy-one-page-bg-video"
            element={<Home6BGVideoOnepage />}
          />
          {/* home 6 multipage dark */}

          <Route
            path="fancy-multi-page-dark"
            element={<Home6MainDemoMultiPageDark />}
          />
          <Route
            path="fancy-multi-page-image-parallax-dark"
            element={<Home6ImageParallaxMultiPageDark />}
          />
          <Route
            path="fancy-multi-page-bg-video-dark"
            element={<Home6BGVideoMultiPageDark />}
          />
          {/* home 6 onepage dark */}

          <Route
            path="fancy-one-page-dark"
            element={<Home6MainDemoOnepageDark />}
          />
          <Route
            path="fancy-one-page-image-parallax-dark"
            element={<Home6ImageParallaxOnepageDark />}
          />
          <Route
            path="fancy-one-page-bg-video-dark"
            element={<Home6BGVideoOnepageDark />}
          />
          {/* home 7 multipage */}
          <Route
            path="gradient-multi-page"
            element={<Home7MainDemoMultiPage />}
          />
          <Route
            path="gradient-multi-page-image-parallax-1"
            element={<Home7ImageParallax1MultiPage />}
          />
          <Route
            path="gradient-multi-page-image-parallax-2"
            element={<Home7ImageParallax2MultiPage />}
          />
          <Route
            path="gradient-multi-page-bg-video"
            element={<Home7BGVideoMultiPage />}
          />
          {/* home 7 onepage */}
          <Route path="gradient-one-page" element={<Home7MainDemoOnepage />} />
          <Route
            path="gradient-one-page-image-parallax-1"
            element={<Home7ImageParallax1Onepage />}
          />
          <Route
            path="gradient-one-page-image-parallax-2"
            element={<Home7ImageParallax2Onepage />}
          />
          <Route
            path="gradient-one-page-bg-video"
            element={<Home7BGVideoOnepage />}
          />
          {/* home 7 multipage dark */}
          <Route
            path="gradient-multi-page-dark"
            element={<Home7MainDemoMultiPageDark />}
          />
          <Route
            path="gradient-multi-page-image-parallax-1-dark"
            element={<Home7ImageParallax1MultiPageDark />}
          />
          <Route
            path="gradient-multi-page-image-parallax-2-dark"
            element={<Home7ImageParallax2MultiPageDark />}
          />
          <Route
            path="gradient-multi-page-bg-video-dark"
            element={<Home7BGVideoMultiPageDark />}
          />
          {/* home 7 onepage dark */}
          <Route
            path="gradient-one-page-dark"
            element={<Home7MainDemoOnepageDark />}
          />
          <Route
            path="gradient-one-page-image-parallax-1-dark"
            element={<Home7ImageParallax1OnepageDark />}
          />
          <Route
            path="gradient-one-page-image-parallax-2-dark"
            element={<Home7ImageParallax2OnepageDark />}
          />
          <Route
            path="gradient-one-page-bg-video-dark"
            element={<Home7BGVideoOnepageDark />}
          />

          {/* home 8 multipage */}

          <Route
            path="modern-multi-page"
            element={<Home8MainDemoMultiPage />}
          />
          <Route
            path="modern-multi-page-image-parallax-1"
            element={<Home8ImageParallax1MultiPage />}
          />
          <Route
            path="modern-multi-page-image-parallax-2"
            element={<Home8ImageParallax2MultiPage />}
          />
          <Route
            path="modern-multi-page-typed-text"
            element={<Home8TypedTextMultiPage />}
          />
          <Route
            path="modern-multi-page-bg-video"
            element={<Home8BGVideoMultiPage />}
          />
          {/* home 8 onepage */}

          <Route path="modern-one-page" element={<Home8MainDemoOnepage />} />
          <Route
            path="modern-one-page-image-parallax-1"
            element={<Home8ImageParallax1Onepage />}
          />
          <Route
            path="modern-one-page-image-parallax-2"
            element={<Home8ImageParallax2Onepage />}
          />
          <Route
            path="modern-one-page-typed-text"
            element={<Home8TypedTextOnepage />}
          />
          <Route
            path="modern-one-page-bg-video"
            element={<Home8BGVideoOnepage />}
          />
          {/* home 8 multipage dark */}

          <Route
            path="modern-multi-page-dark"
            element={<Home8MainDemoMultiPageDark />}
          />
          <Route
            path="modern-multi-page-image-parallax-1-dark"
            element={<Home8ImageParallax1MultiPageDark />}
          />
          <Route
            path="modern-multi-page-image-parallax-2-dark"
            element={<Home8ImageParallax2MultiPageDark />}
          />
          <Route
            path="modern-multi-page-typed-text-dark"
            element={<Home8TypedTextMultiPageDark />}
          />
          <Route
            path="modern-multi-page-bg-video-dark"
            element={<Home8BGVideoMultiPageDark />}
          />
          {/* home 8 onepage dark */}

          <Route
            path="modern-one-page-dark"
            element={<Home8MainDemoOnepageDark />}
          />
          <Route
            path="modern-one-page-image-parallax-1-dark"
            element={<Home8ImageParallax1OnepageDark />}
          />
          <Route
            path="modern-one-page-image-parallax-2-dark"
            element={<Home8ImageParallax2OnepageDark />}
          />
          <Route
            path="modern-one-page-typed-text-dark"
            element={<Home8TypedTextOnepageDark />}
          />
          <Route
            path="modern-one-page-bg-video-dark"
            element={<Home8BGVideoOnepageDark />}
          />

          {/* home 9 multipage */}
          <Route path="slick-multi-page" element={<Home9MainDemoMultiPage />} />
          <Route
            path="slick-multi-page-split"
            element={<Home9SplitMultiPage />}
          />
          {/* home 9 onepage */}
          <Route path="slick-one-page" element={<Home9MainDemoOnepage />} />
          <Route path="slick-one-page-split" element={<Home9SplitOnepage />} />

          {/* home 9 multipage dark */}
          <Route path="slick-multi-page" element={<Home9MainDemoMultiPage />} />
          <Route
            path="slick-multi-page-split"
            element={<Home9SplitMultiPage />}
          />
          {/* home 9 onepage dark */}
          <Route
            path="slick-one-page-dark"
            element={<Home9MainDemoOnepageDark />}
          />
          <Route
            path="slick-one-page-split-dark"
            element={<Home9SplitOnepageDark />}
          />

          {/* home 10 multipage */}
          <Route
            path="strong-multi-page"
            element={<Home10MainDemoMultiPage />}
          />
          <Route
            path="strong-multi-page-image-parallax"
            element={<Home10ImageParallaxMultiPage />}
          />
          <Route
            path="strong-multi-page-bg-video"
            element={<Home10BGVideoMultiPage />}
          />
          {/* home 10 onepage */}
          <Route path="strong-one-page" element={<Home10MainDemoOnepage />} />
          <Route
            path="strong-one-page-image-parallax"
            element={<Home10ImageParallaxOnepage />}
          />
          <Route
            path="strong-one-page-bg-video"
            element={<Home10BGVideoOnepage />}
          />
          {/* home 10 multipage dark */}
          <Route
            path="strong-multi-page-dark"
            element={<Home10MainDemoMultiPageDark />}
          />
          <Route
            path="strong-multi-page-image-parallax-dark"
            element={<Home10ImageParallaxMultiPageDark />}
          />
          <Route
            path="strong-multi-page-bg-video-dark"
            element={<Home10BGVideoMultiPageDark />}
          />
          {/* home 10 onepage dark */}
          <Route
            path="strong-one-page-dark"
            element={<Home10MainDemoOnepageDark />}
          />
          <Route
            path="strong-one-page-image-parallax-dark"
            element={<Home10ImageParallaxOnepageDark />}
          />
          <Route
            path="strong-one-page-bg-video-dark"
            element={<Home10BGVideoOnepageDark />}
          />

          {/* home 1 portfolios */}
          <Route
            path="main-portfolio-boxed-2col"
            element={<MainPortfolioPageBoxed2Col />}
          />
          <Route
            path="main-portfolio-boxed-3col"
            element={<MainPortfolioPageBoxed3Col />}
          />
          <Route
            path="main-portfolio-boxed-4col"
            element={<MainPortfolioPageBoxed4Col />}
          />
          <Route
            path="main-portfolio-wide-2col"
            element={<MainPortfolioPageWide2Col />}
          />
          <Route
            path="main-portfolio-wide-3col"
            element={<MainPortfolioPageWide3Col />}
          />
          <Route
            path="main-portfolio-wide-4col"
            element={<MainPortfolioPageWide4Col />}
          />
          <Route
            path="main-portfolio-lazyload"
            element={<MainPortfolioPageLazyload />}
          />
          <Route
            path="main-portfolio-masonry-2col"
            element={<MainPortfolioPageMasonry2Col />}
          />
          <Route
            path="main-portfolio-masonry-3col"
            element={<MainPortfolioPageMasonry3Col />}
          />
          <Route
            path="main-portfolio-masonry-4col"
            element={<MainPortfolioPageMasonry4Col />}
          />
          <Route
            path="main-portfolio-single-1/:id"
            element={<MainPortfolioSinglePage1 />}
          />
          <Route
            path="main-portfolio-single-2/:id"
            element={<MainPortfolioSinglePage2 />}
          />
          <Route
            path="main-portfolio-single-3/:id"
            element={<MainPortfolioSinglePage3 />}
          />
          {/* home 1 portfolios dark */}
          <Route
            path="main-portfolio-boxed-2col-dark"
            element={<MainPortfolioPageBoxed2ColDark />}
          />
          <Route
            path="main-portfolio-boxed-3col-dark"
            element={<MainPortfolioPageBoxed3ColDark />}
          />
          <Route
            path="main-portfolio-boxed-4col-dark"
            element={<MainPortfolioPageBoxed4ColDark />}
          />
          <Route
            path="main-portfolio-wide-2col-dark"
            element={<MainPortfolioPageWide2ColDark />}
          />
          <Route
            path="main-portfolio-wide-3col-dark"
            element={<MainPortfolioPageWide3ColDark />}
          />
          <Route
            path="main-portfolio-wide-4col-dark"
            element={<MainPortfolioPageWide4ColDark />}
          />
          <Route
            path="main-portfolio-lazyload-dark"
            element={<MainPortfolioPageLazyloadDark />}
          />
          <Route
            path="main-portfolio-masonry-2col-dark"
            element={<MainPortfolioPageMasonry2ColDark />}
          />
          <Route
            path="main-portfolio-masonry-3col-dark"
            element={<MainPortfolioPageMasonry3ColDark />}
          />
          <Route
            path="main-portfolio-masonry-4col-dark"
            element={<MainPortfolioPageMasonry4ColDark />}
          />
          <Route
            path="main-portfolio-single-1-dark/:id"
            element={<MainPortfolioSinglePage1Dark />}
          />
          <Route
            path="main-portfolio-single-2-dark/:id"
            element={<MainPortfolioSinglePage2Dark />}
          />
          <Route
            path="main-portfolio-single-3-dark/:id"
            element={<MainPortfolioSinglePage3Dark />}
          />
          {/* main blogs */}
          <Route
            path="main-blog-classic-sidebar-left"
            element={<MainBlogClassicPageSidebarLeft />}
          />
          <Route
            path="main-blog-classic-sidebar-right"
            element={<MainBlogClassicPageSidebarRight />}
          />
          <Route
            path="main-blog-classic-fullwidth"
            element={<MainBlogClassicPageFullWidth />}
          />
          <Route
            path="main-blog-columns-2col"
            element={<MainBlogColumnsPage2Col />}
          />
          <Route
            path="main-blog-columns-3col"
            element={<MainBlogColumnsPage3Col />}
          />
          <Route
            path="main-blog-single-sidebar-left/:id"
            element={<MainBlogSinglePageSIdebarLeft />}
          />
          <Route
            path="main-blog-single-sidebar-right/:id"
            element={<MainBlogSinglePageSidebarRight />}
          />
          <Route
            path="main-blog-single-fullwidth/:id"
            element={<MainBlogSinglePageFullWidth />}
          />
          {/* main blogs dark */}
          <Route
            path="main-blog-classic-sidebar-left-dark"
            element={<MainBlogClassicPageSidebarLeftDark />}
          />
          <Route
            path="main-blog-classic-sidebar-right-dark"
            element={<MainBlogClassicPageSidebarRightDark />}
          />
          <Route
            path="main-blog-classic-fullwidth-dark"
            element={<MainBlogClassicPageFullWidthDark />}
          />
          <Route
            path="main-blog-columns-2col-dark"
            element={<MainBlogColumnsPage2ColDark />}
          />
          <Route
            path="main-blog-columns-3col-dark"
            element={<MainBlogColumnsPage3ColDark />}
          />
          <Route
            path="main-blog-single-sidebar-left-dark/:id"
            element={<MainBlogSinglePageSIdebarLeftDark />}
          />
          <Route
            path="main-blog-single-sidebar-right-dark/:id"
            element={<MainBlogSinglePageSidebarRightDark />}
          />
          <Route
            path="main-blog-single-fullwidth-dark/:id"
            element={<MainBlogSinglePageFullWidthDark />}
          />

          {/* elements page  */}

          <Route
            path="main-elements-accordions"
            element={<ElementPageAccordion />}
          />
          <Route
            path="main-elements-alert-messages"
            element={<ElementPageAlertMessage />}
          />
          <Route
            path="main-elements-animation"
            element={<ElementPageAnimation />}
          />
          <Route path="main-elements-bars" element={<ElementPageBars />} />
          <Route
            path="main-elements-buttons"
            element={<ElementPageButtons />}
          />
          <Route
            path="main-elements-cookie-banner"
            element={<ElementPageCookieBanner />}
          />
          <Route
            path="main-elements-features"
            element={<ElementPageFeatures />}
          />
          <Route path="main-elements-forms" element={<ElementPageForms />} />
          <Route path="main-elements-grid" element={<ElementPageGrid />} />
          <Route
            path="main-elements-icons-brands"
            element={<ElementPageIconsBrands />}
          />
          <Route
            path="main-elements-icons-iconmonstr"
            element={<ElementPageIconIconmonstr />}
          />
          <Route
            path="main-elements-icons-Ionicons"
            element={<ElementPageIconsLonicons />}
          />
          <Route
            path="main-elements-icons-monoicons"
            element={<ElementPageIconsMonicons />}
          />
          <Route
            path="main-elements-images-lazyload"
            element={<ElementPageImageLazyLoad />}
          />
          <Route
            path="main-elements-lightbox"
            element={<ElementPageLightbox />}
          />
          <Route path="main-elements-sliders" element={<ElementPageSlider />} />
          <Route
            path="main-elements-sliders-lazyload"
            element={<ElementPageSliderLazyload />}
          />
          <Route path="main-elements-tabs" element={<ElementPageTabs />} />
          <Route
            path="main-elements-tooltips"
            element={<ElementPageTooltips />}
          />
          <Route
            path="main-elements-typography"
            element={<ElementPageTypography />}
          />
          <Route
            path="main-elements-video-sound"
            element={<ElementPageVideoSound />}
          />
          {/* elements page dark */}

          <Route
            path="main-elements-accordions-dark"
            element={<ElementPageAccordionDark />}
          />
          <Route
            path="main-elements-alert-messages-dark"
            element={<ElementPageAlertMessageDark />}
          />
          <Route
            path="main-elements-animation-dark"
            element={<ElementPageAnimationDark />}
          />
          <Route
            path="main-elements-bars-dark"
            element={<ElementPageBarsDark />}
          />
          <Route
            path="main-elements-buttons-dark"
            element={<ElementPageButtonsDark />}
          />
          <Route
            path="main-elements-cookie-banner-dark"
            element={<ElementPageCookieBannerDark />}
          />
          <Route
            path="main-elements-features-dark"
            element={<ElementPageFeaturesDark />}
          />
          <Route
            path="main-elements-forms-dark"
            element={<ElementPageFormsDark />}
          />
          <Route path="main-elements-grid" element={<ElementPageGridDark />} />
          <Route
            path="main-elements-icons-brands-dark"
            element={<ElementPageIconsBrandsDark />}
          />
          <Route
            path="main-elements-icons-iconmonstr-dark"
            element={<ElementPageIconIconmonstrDark />}
          />
          <Route
            path="main-elements-icons-Ionicons-dark"
            element={<ElementPageIconsLoniconsDark />}
          />
          <Route
            path="main-elements-icons-monoicons-dark"
            element={<ElementPageIconsMoniconsDark />}
          />
          <Route
            path="main-elements-images-lazyload-dark"
            element={<ElementPageImageLazyLoadDark />}
          />
          <Route
            path="main-elements-lightbox-dark"
            element={<ElementPageLightboxDark />}
          />
          <Route
            path="main-elements-sliders-dark"
            element={<ElementPageSliderDark />}
          />
          <Route
            path="main-elements-sliders-lazyload-dark"
            element={<ElementPageSliderLazyloadDark />}
          />
          <Route
            path="main-elements-tabs-dark"
            element={<ElementPageTabsDark />}
          />
          <Route
            path="main-elements-tooltips-dark"
            element={<ElementPageTooltipsDark />}
          />
          <Route
            path="main-elements-typography-dark"
            element={<ElementPageTypographyDark />}
          />
          <Route
            path="main-elements-video-sound-dark"
            element={<ElementPageVideoSoundDark />}
          />

          {/* main other pages */}

          <Route path="main-pages-about-1" element={<MainPageAbout1 />} />
          <Route path="main-pages-about-2" element={<MainAboutPage2 />} />
          <Route path="main-pages-about-3" element={<MainAboutPage3 />} />
          <Route path="main-pages-services-1" element={<MainServicesPage1 />} />
          <Route path="main-pages-services-2" element={<MainServicesPage2 />} />
          <Route path="main-pages-services-3" element={<MainServicesPage3 />} />
          <Route path="main-pages-clients" element={<MainPageClients />} />
          <Route path="main-pages-team" element={<MainPageTeam />} />
          <Route path="main-pages-faq-1" element={<MainPageFaq1 />} />
          <Route path="main-pages-faq-2" element={<MainPageFaq2 />} />
          <Route path="main-pages-pricing-1" element={<MainPagePricing1 />} />
          <Route path="main-pages-pricing-2" element={<MainPagePricing2 />} />
          <Route path="main-pages-contact-1" element={<MainPageContact1 />} />
          <Route path="main-pages-contact-2" element={<MainPageContact2 />} />
          <Route
            path="main-pages-gallery-1col"
            element={<MainPageGalleryCol1 />}
          />
          <Route
            path="main-pages-gallery-2col"
            element={<MainPageGalleryCol2 />}
          />
          <Route
            path="main-pages-gallery-3col"
            element={<MainPageGalleryCol3 />}
          />
          <Route
            path="main-pages-gallery-4col"
            element={<MainPageGalleryCol4 />}
          />
          <Route path="main-pages-account" element={<MainPageAccount />} />
          <Route
            path="main-pages-under-construction"
            element={<MainPageUnderConstraction />}
          />
          <Route path="main-pages-404" element={<MainPageNotFound />} />

          {/* main other pages dark */}

          <Route
            path="main-pages-about-1-dark"
            element={<MainPageAbout1Dark />}
          />
          <Route
            path="main-pages-about-2-dark"
            element={<MainAboutPage2Dark />}
          />
          <Route
            path="main-pages-about-3-dark"
            element={<MainAboutPage3Dark />}
          />
          <Route
            path="main-pages-services-1-dark"
            element={<MainServicesPage1Dark />}
          />
          <Route
            path="main-pages-services-2-dark"
            element={<MainServicesPage2Dark />}
          />
          <Route
            path="main-pages-services-3-dark"
            element={<MainServicesPage3Dark />}
          />
          <Route
            path="main-pages-clients-dark"
            element={<MainPageClientDark />}
          />
          <Route path="main-pages-team-dark" element={<MainPageTeamDark />} />
          <Route path="main-pages-faq-1-dark" element={<MainPageFaq1Dark />} />
          <Route path="main-pages-faq-2-dark" element={<MainPageFaq2Dark />} />
          <Route
            path="main-pages-pricing-1-dark"
            element={<MainPagePricing1Dark />}
          />
          <Route
            path="main-pages-pricing-2-dark"
            element={<MainPagePricing2Dark />}
          />
          <Route
            path="main-pages-contact-1-dark"
            element={<MainPageContact1Dark />}
          />
          <Route
            path="main-pages-contact-2-dark"
            element={<MainPageContact2Dark />}
          />
          <Route
            path="main-pages-gallery-1col-dark"
            element={<MainPageGalleryCol1Dark />}
          />
          <Route
            path="main-pages-gallery-2col-dark"
            element={<MainPageGalleryCol2Dark />}
          />
          <Route
            path="main-pages-gallery-3col-dark"
            element={<MainPageGalleryCol3Dark />}
          />
          <Route
            path="main-pages-gallery-4col-dark"
            element={<MainPageGalleryCol4Dark />}
          />
          <Route
            path="main-pages-account-dark"
            element={<MainPageAccountDark />}
          />

          {/* bold other pages */}
          <Route path="bold-about" element={<BoldAboutPage />} />
          <Route path="bold-services" element={<BoldServicesPage />} />
          <Route path="bold-portfolio" element={<BoldPortfolioPage />} />
          <Route
            path="bold-portfolio-single/:id"
            element={<BoldPortfolioSinglePage />}
          />
          <Route path="bold-blog" element={<BoldBlogPage />} />
          <Route path="bold-blog-single/:id" element={<BoldBlogSinglePage />} />
          <Route path="bold-contact" element={<BoldContactPage />} />
          {/* bold other pages */}
          <Route path="bold-about-dark" element={<BoldAboutPageDark />} />
          <Route path="bold-services-dark" element={<BoldServicesPageDark />} />
          <Route
            path="bold-portfolio-dark"
            element={<BoldPortfolioPageDark />}
          />
          <Route
            path="bold-portfolio-single-dark/:id"
            element={<BoldPortfolioSinglePageDark />}
          />
          <Route path="bold-blog-dark" element={<BoldBlogPageDark />} />
          <Route
            path="bold-blog-single-dark/:id"
            element={<BoldBlogSinglePageDark />}
          />
          <Route path="bold-contact-dark" element={<BoldContactPageDark />} />

          {/* brutalist others page */}
          <Route path="brutalist-about" element={<BrutalistAboutPage />} />
          <Route
            path="brutalist-services"
            element={<BrutalistServicesPage />}
          />

          <Route
            path="brutalist-portfolio"
            element={<BrutalistPortfolioPage />}
          />
          <Route
            path="brutalist-portfolio-single/:id"
            element={<BrutalistPortfolioSinglePage />}
          />
          <Route path="brutalist-blog" element={<BrutalistBlogPage />} />
          <Route
            path="brutalist-blog-single/:id"
            element={<BrutalistBlogSinglePage />}
          />
          <Route path="brutalist-contact" element={<BrutalistContactPage />} />
        </Route>
        {/* brutalist others page */}
        <Route
          path="brutalist-about-dark"
          element={<BrutalistAboutPageDark />}
        />
        <Route
          path="brutalist-services-dark"
          element={<BrutalistServicesPageDark />}
        />

        <Route
          path="brutalist-portfolio-dark"
          element={<BrutalistPortfolioPageDark />}
        />
        <Route
          path="brutalist-portfolio-single-dark/:id"
          element={<BrutalistPortfolioSinglePageDark />}
        />
        <Route path="brutalist-blog-dark" element={<BrutalistBlogPageDark />} />
        <Route
          path="brutalist-blog-single-dark/:id"
          element={<BrutalistBlogSinglePageDark />}
        />
        <Route
          path="brutalist-contact-dark"
          element={<BrutalistContactPageDark />}
        />

        {/* corporate pages */}
        <Route path="corporate-about" element={<CorporateAboutPage />} />
        <Route path="corporate-services" element={<CorporateServicesPage />} />
        <Route
          path="corporate-portfolio"
          element={<CorporatePortfolioPage />}
        />
        <Route path="corporate-blog" element={<CorporateBlogPage />} />
        <Route
          path="corporate-portfolio-single/:id"
          element={<CorporatePortfolioSinglePage />}
        />
        <Route
          path="corporate-blog-single/:id"
          element={<CorporateBlogSinglePage />}
        />
        <Route path="corporate-contact" element={<CorporateContactPage />} />
        {/* corporate pages */}
        <Route
          path="corporate-about-dark"
          element={<CorporateAboutPageDark />}
        />
        <Route
          path="corporate-services-dark"
          element={<CorporateServicesPageDark />}
        />
        <Route
          path="corporate-portfolio-dark"
          element={<CorporatePortfolioPageDark />}
        />
        <Route path="corporate-blog-dark" element={<CorporateBlogPageDark />} />
        <Route
          path="corporate-portfolio-single-dark/:id"
          element={<CorporatePortfolioSinglePageDark />}
        />
        <Route
          path="corporate-blog-single-dark/:id"
          element={<CorporateBlogSinglePageDark />}
        />
        <Route
          path="corporate-contact-dark"
          element={<CorporateContactPageDark />}
        />

        {/* elegant others page */}
        <Route path="elegant-about" element={<ElegantAboutPage />} />
        <Route path="elegant-services" element={<ElegantServicesPage />} />
        <Route path="elegant-portfolio" element={<ElegantPortfolioPage />} />
        <Route path="elegant-blog" element={<ElegantBlogPage />} />
        <Route
          path="elegant-portfolio-single/:id"
          element={<ElegantPortfolioSinglePage />}
        />
        <Route
          path="elegant-blog-single/:id"
          element={<ElegantBlogSinglePage />}
        />
        <Route path="elegant-contact" element={<ElegantContactPage />} />

        {/* elegant others page dark*/}
        <Route path="elegant-about-dark" element={<ElegantAboutPageDark />} />
        <Route
          path="elegant-services-dark"
          element={<ElegantServicesPageDark />}
        />
        <Route
          path="elegant-portfolio-dark"
          element={<ElegantPortfolioPageDark />}
        />
        <Route path="elegant-blog-dark" element={<ElegantBlogPageDark />} />
        <Route
          path="elegant-portfolio-single-dark/:id"
          element={<ElegantPortfolioSinglePageDark />}
        />
        <Route
          path="elegant-blog-single-dark/:id"
          element={<ElegantBlogSinglePageDark />}
        />
        <Route
          path="elegant-contact-dark"
          element={<ElegantContactPageDark />}
        />
        {/* fancy others pages */}
        <Route path="fancy-about" element={<FancyAboutPage />} />
        <Route path="fancy-services" element={<FancyServicesPage />} />
        <Route path="fancy-portfolio" element={<FancyPortfolioPage />} />
        <Route path="fancy-blog" element={<FancyBlogPage />} />
        <Route
          path="fancy-portfolio-single/:id"
          element={<FancyPortfolioSinglePage />}
        />
        <Route path="fancy-blog-single/:id" element={<FancyBlogSinglePage />} />
        <Route path="fancy-contact" element={<FancyContactPage />} />
        {/* fancy others pages dark */}
        <Route path="fancy-about-dark" element={<FancyAboutPageDark />} />
        <Route path="fancy-services-dark" element={<FancyServicesPageDark />} />
        <Route
          path="fancy-portfolio-dark"
          element={<FancyPortfolioPageDark />}
        />
        <Route path="fancy-blog-dark" element={<FancyBlogPageDark />} />
        <Route
          path="fancy-portfolio-single-dark/:id"
          element={<FancyPortfolioSinglePageDark />}
        />
        <Route
          path="fancy-blog-single-dark/:id"
          element={<FancyBlogSinglePageDark />}
        />
        <Route path="fancy-contact-dark" element={<FancyContactPageDark />} />

        {/* gradient others pages */}
        <Route path="gradient-about" element={<GradientAboutPage />} />
        <Route path="gradient-services" element={<GradientServicesPage />} />
        <Route path="gradient-portfolio" element={<GradientPortfolioPage />} />
        <Route path="gradient-blog" element={<GradientBlogPage />} />
        <Route
          path="gradient-portfolio-single/:id"
          element={<GradientPortfolioSinglePage />}
        />
        <Route
          path="gradient-blog-single/:id"
          element={<GradientBlogSinglePage />}
        />
        <Route path="gradient-contact" element={<GradientContactPage />} />
        {/* gradient others pages dark */}
        <Route path="gradient-about-dark" element={<GradientAboutPageDark />} />
        <Route
          path="gradient-services-dark"
          element={<GradientServicesPageDark />}
        />
        <Route
          path="gradient-portfolio-dark"
          element={<GradientPortfolioPageDark />}
        />
        <Route path="gradient-blog-dark" element={<GradientBlogPageDark />} />
        <Route
          path="gradient-portfolio-single-dark/:id"
          element={<GradientPortfolioSinglePageDark />}
        />
        <Route
          path="gradient-blog-single-dark/:id"
          element={<GradientBlogSinglePageDark />}
        />
        <Route
          path="gradient-contact-dark"
          element={<GradientContactPageDark />}
        />
        {/* modern others pages */}
        <Route path="modern-about" element={<ModernAboutPage />} />
        <Route path="modern-services" element={<ModernServicesPage />} />
        <Route path="modern-portfolio" element={<ModernPortfolioPage />} />
        <Route path="modern-blog" element={<ModernBlogPage />} />
        <Route
          path="modern-portfolio-single/:id"
          element={<ModernPortfolioSinglePage />}
        />
        <Route
          path="modern-blog-single/:id"
          element={<ModernBlogSinglePage />}
        />
        <Route path="modern-contact" element={<ModernContactPage />} />
        {/* modern others pages dark */}
        <Route path="modern-about-dark" element={<ModernAboutPage />} />
        <Route path="modern-services-dark" element={<ModernServicesPage />} />
        <Route path="modern-portfolio-dark" element={<ModernPortfolioPage />} />
        <Route path="modern-blog-dark" element={<ModernBlogPage />} />
        <Route
          path="modern-portfolio-single-dark/:id"
          element={<ModernPortfolioSinglePage />}
        />
        <Route
          path="modern-blog-single-dark/:id"
          element={<ModernBlogSinglePage />}
        />
        <Route path="modern-contact-dark" element={<ModernContactPage />} />
        {/* slick others pages */}
        <Route path="slick-about" element={<SlickAboutPage />} />
        <Route path="slick-services" element={<SlickServicesPage />} />
        <Route path="slick-portfolio" element={<SlickPortfolioPage />} />
        <Route path="slick-blog" element={<SlickBlogPage />} />
        <Route
          path="slick-portfolio-single/:id"
          element={<SlickPortfolioSinglePage />}
        />
        <Route path="slick-blog-single/:id" element={<SlickBlogSinglePage />} />
        <Route path="slick-contact" element={<SlickContactPage />} />
        {/* slick others pages dark */}
        <Route path="slick-about-dark" element={<SlickAboutPageDark />} />
        <Route path="slick-services-dark" element={<SlickServicesPageDark />} />
        <Route
          path="slick-portfolio-dark"
          element={<SlickPortfolioPageDark />}
        />
        <Route path="slick-blog-dark" element={<SlickBlogPageDark />} />
        <Route
          path="slick-portfolio-single-dark/:id"
          element={<SlickPortfolioSinglePageDark />}
        />
        <Route
          path="slick-blog-single-dark/:id"
          element={<SlickBlogSinglePageDark />}
        />
        <Route path="slick-contact-dark" element={<SlickContactPageDark />} />
        {/* strong others pages */}
        <Route path="strong-about" element={<StrongAboutPage />} />
        <Route path="strong-services" element={<StrongServicesPage />} />
        <Route path="strong-portfolio" element={<StrongPortfolioPage />} />
        <Route path="strong-blog" element={<StrongBlogPage />} />
        <Route
          path="strong-portfolio-single/:id"
          element={<StrongPortfolioSinglePage />}
        />
        <Route
          path="strong-blog-single/:id"
          element={<StrongBlogSinglePage />}
        />
        <Route path="strong-contact" element={<StrongContactPage />} />
        {/* strong others pages dark */}
        <Route path="strong-about-dark" element={<StrongAboutPageDark />} />
        <Route
          path="strong-services-dark"
          element={<StrongServicesPageDark />}
        />
        <Route
          path="strong-portfolio-dark"
          element={<StrongPortfolioPageDark />}
        />
        <Route path="strong-blog-dark" element={<StrongBlogPageDark />} />
        <Route
          path="strong-portfolio-single-dark/:id"
          element={<StrongPortfolioSinglePageDark />}
        />
        <Route
          path="strong-blog-single-dark/:id"
          element={<StrongBlogSinglePageDark />}
        />
        <Route path="strong-contact-dark" element={<StrongContactPageDark />} />

        {/* header pages */}
        <Route
          path="main-elements-header-dark-light"
          element={<ElementPageHeaderDarkLight />}
        />
        <Route
          path="main-elements-header-dark-transparent"
          element={<ElementPageHeaderDarkTransparent />}
        />
        <Route
          path="main-elements-header-white"
          element={<ElementPageHeaderWhite />}
        />
        <Route
          path="main-elements-header-white-transparent"
          element={<ElementPageHeaderWhiteTransparent />}
        />
        <Route
          path="main-elements-header-white-after-scroll"
          element={<ElementPageHeaderWhiteAfterScroll />}
        />
        <Route
          path="main-elements-header-dark"
          element={<ElementPageHeaderDarkDark />}
        />
        <Route
          path="main-elements-header-dark-transparent-dark"
          element={<ElementPageHeaderDarkTransparentDark />}
        />
        <Route
          path="main-elements-header-white-after-scroll-dark"
          element={<ElementPageHeaderWhiteAfterScrollDark />}
        />

        <Route path="*" element={<MainPageNotFound />} />
      </Routes>
      <ScrollTopBehaviour />
    </>
  );
}

export default App;
