// Industry testing banners shown on the Work page. Edit text here, not in JSX.
// These describe how we approach each domain. They are not client results.

export const industries = [
  {
    id: "ecommerce",
    title: "E-Commerce & Retail",
    description:
      "End-to-end testing of the buyer journey, where bugs show up as abandoned carts, failed payments and wrong orders.",
    scenarios: [
      "Product search, filters and product details",
      "Cart totals, discounts, checkout and payment failures",
      "Price, inventory and order consistency across API and database, plus duplicate orders and retries",
    ],
  },
  {
    id: "fintech",
    title: "Finance & FinTech",
    description:
      "Careful testing for platforms where a wrong balance, a duplicate transaction or an access gap is not acceptable.",
    scenarios: [
      "Transaction accuracy, balances and calculations, consistent across API and database",
      "Duplicate transactions, failed payments and retry behaviour",
      "Access control, sensitive-data exposure checks and audit trails",
    ],
  },
  {
    id: "media",
    title: "Media & Streaming",
    description:
      "Testing of content discovery, playback and access rules across browsers and screen sizes.",
    scenarios: [
      "Content search, discovery and metadata validation",
      "Playback, buffering, loading states and failure handling where applicable",
      "Subscription access, content restrictions, and cross-browser and responsive checks",
    ],
  },
];