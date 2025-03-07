import CourseContainer from "../components/CourseContainer";

const courses = [
  {"name": "Financial Modeling & Valuation", "description": "Learn to build robust financial models for company valuation, forecasting, and investment analysis.", "icon": "chart-bar"},
  {"name": "Corporate Finance Fundamentals", "description": "Master the core principles of corporate finance, including capital budgeting, financial planning, and risk management.", "icon": "briefcase"},
  {"name": "Investment Banking Essentials", "description": "Explore the world of investment banking, covering M&A, IPOs, and financial advisory services.", "icon": "banknotes"},
  {"name": "Personal Finance Management", "description": "Gain practical skills in budgeting, saving, investing, and debt management for personal financial success.", "icon": "user-circle"},
  {"name": "Financial Accounting & Reporting", "description": "Understand the principles of financial accounting, including balance sheets, income statements, and cash flow statements.", "icon": "document-text"},
  {"name": "Risk Management & Derivatives", "description": "Learn to identify, measure, and manage financial risks using derivatives and other risk management tools.", "icon": "shield-exclamation"},
  {"name": "Portfolio Management & Asset Allocation", "description": "Develop strategies for building and managing diversified investment portfolios to achieve financial goals.", "icon": "chart-pie"},
  {"name": "Financial Data Analysis with Python", "description": "Use Python and relevant libraries to analyze financial data, perform statistical analysis, and build financial models.", "icon": "code-bracket"},
  {"name": "Real Estate Finance & Investment", "description": "Explore the financial aspects of real estate investment, including valuation, financing, and property management.", "icon": "home-modern"},
  {"name": "Cryptocurrency & Blockchain Finance", "description": "Understand the fundamentals of cryptocurrencies, blockchain technology, and their impact on the financial industry.", "icon": "currency-dollar"},
  {"name": "Financial Planning & Wealth Management", "description": "Learn to develop comprehensive financial plans for clients, including retirement planning, estate planning, and tax optimization.", "icon": "presentation-chart-line"},
  {"name": "International Finance & Global Markets", "description": "Explore the complexities of international finance, including foreign exchange, global capital markets, and international trade.", "icon": "globe-alt"},
  {"name": "Financial Statement Analysis", "description": "Master the techniques for analyzing financial statements to assess a company's financial health and performance.", "icon": "magnifying-glass"},
  {"name": "FinTech Innovations & Applications", "description": "Discover the latest innovations in financial technology, including digital payments, robo-advisors, and peer-to-peer lending.", "icon": "light-bulb"},
  {"name": "Behavioral Finance & Investor Psychology", "description": "Understand the psychological biases and behavioral patterns that influence investor decision-making.", "icon": "brain"}
];

const Courses = () => {
  return (
    <div className="m-8">
      {courses.map( course => <CourseContainer imageURL={'https://via.placeholder.com/150'} title={course.name} description={course.description} internalURL={'/courses/1'}/> )}
      
    </div>
  );
};


export default Courses;