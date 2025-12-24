// Mock API for projects; replace with DB calls later
export default function handler(req, res) {
  const projects = [
    {
      id: 1,
      title: "Merchant Churn Prediction Dashboard",
      description:
        "An end-to-end analytics dashboard that predicts merchant churn using machine learning models and engineered time-series and behavioral features.",
      impact:
        "Enabled proactive identification of high-risk merchants, supporting data-driven retention strategies.",
      github: "https://github.com/Arnavparashar/Customer_churn_dashboard",
      live: "https://customerchurndashboard-thmv3wnh7gvscx7cjoqbui.streamlit.app/",
      icon: "/icons/merchant-churn.svg",
    },
  {
    id: 2,
    title: "StockLens — Financial Analytics & Forecasting Dashboard",
    description:
      "An interactive Streamlit-based dashboard for analyzing historical stock prices, technical indicators, and market trends using real-time financial data.",
    impact:
      "Provided clear, visual insights into price movements and technical signals to support exploratory forecasting and analysis.",
    github: "https://github.com/Arnavparashar/StockLens",
    live: "https://stocklens-awrx5pgwutdfsjsdwagzyj.streamlit.app/",
    icon: "/icons/stocklens.png", // ✅ PNG
  },

    {
      id: 3,
      title: "QuickLingo — Cloud-Based Language Translator",
      description:
        "A lightweight, serverless language translation web application built on AWS, enabling fast and intuitive text translation.",
      impact:
        "Demonstrated scalable cloud-native application design using serverless AWS services.",
      github: "https://github.com/Arnavparashar/QuickLingo",
      live: "http://langtranslate1.s3-website-us-east-1.amazonaws.com/",
      icon: "/icons/quicklingo.svg",
    },
  ];

  res.status(200).json(projects);
}
