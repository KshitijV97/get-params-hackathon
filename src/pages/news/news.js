import React, { useState } from "react";
import styled from "styled-components";

// Hardcoded News Data
const newsData = {
  "Top Headlines": [
    {
      id: 1,
      title: "Global Markets React to Fed's Latest Rate Hike",
      source: "Bloomberg",
      date: "July 24, 2025",
      content:
        "Major stock indices saw mixed reactions today following the Federal Reserve's announcement of a 25 basis point interest rate increase, aiming to curb inflation. Analysts are closely watching bond yields.",
    },
    {
      id: 2,
      title: "Tech Giants Announce Strong Q2 Earnings",
      source: "Reuters",
      date: "July 23, 2025",
      content:
        "Leading technology companies reported better-than-expected earnings for the second quarter, driven by robust cloud computing and artificial intelligence segments. Share prices surged in after-hours trading.",
    },
    {
      id: 3,
      title: "Oil Prices Dip Amidst Supply Concerns",
      source: "The Wall Street Journal",
      date: "July 22, 2025",
      content:
        "Crude oil benchmarks fell as global supply concerns eased and demand forecasts were slightly revised downwards. OPEC+ production levels remain a key factor for market watchers.",
    },
    {
      id: 4,
      title: "India’s GDP Growth Forecast Revised Upward",
      source: "Economic Times",
      date: "July 25, 2025",
      content:
        "The Reserve Bank of India has revised the country’s GDP growth forecast to 7.4% for FY25, citing strong domestic demand and resilient export performance.",
    },
    {
      id: 5,
      title: "Rupee Strengthens Against Dollar Amid Foreign Inflows",
      source: "LiveMint",
      date: "July 25, 2025",
      content:
        "The Indian Rupee appreciated by 18 paise today, driven by strong FII inflows into equity markets and cooling crude oil prices.",
    },
    {
      id: 6,
      title: "Gold Prices Surge as Global Uncertainty Grows",
      source: "CNBC",
      date: "July 24, 2025",
      content:
        "Gold hit a two-month high as investors sought safe-haven assets amid rising geopolitical tensions and concerns over global economic recovery.",
    },
    {
      id: 7,
      title: "Fintech Startup Raises $50M in Series C Round",
      source: "TechCrunch",
      date: "July 23, 2025",
      content:
        "A leading Indian fintech firm secured $50 million in a Series C round led by Sequoia Capital, aiming to expand its digital lending services across Tier-2 and Tier-3 cities.",
    },
    {
      id: 8,
      title: "Unemployment Rate Drops as Hiring Picks Up",
      source: "Business Standard",
      date: "July 22, 2025",
      content:
        "India’s unemployment rate fell to 6.1% in June 2025, the lowest since the pandemic, driven by rising job creation in manufacturing and services sectors.",
    },
  ],
  "Market Insights": [
    {
      id: 4,
      title: "The Future of Renewable Energy Investments",
      source: "Financial Times",
      date: "July 24, 2025",
      content:
        "A deep dive into the burgeoning renewable energy sector, highlighting investment opportunities and regulatory challenges. Government incentives continue to drive growth.",
    },
    {
      id: 5,
      title: "Understanding Inflation's Impact on Your Portfolio",
      source: "Investopedia",
      date: "July 21, 2025",
      content:
        "Experts discuss strategies to protect and grow your investments in an inflationary environment, including diversification and real asset allocation.",
    },
  ],
  "Company News": [
    {
      id: 6,
      title: "Alpha Corp Acquires Beta Solutions for $500M",
      source: "Business Standard",
      date: "July 24, 2025",
      content:
        "Alpha Corporation announced its strategic acquisition of Beta Solutions, a leading AI startup, for half a billion dollars in an all-cash deal. The move is expected to bolster Alpha Corp's AI capabilities.",
    },
    {
      id: 7,
      title: "Delta Airlines Reports Record Passenger Numbers",
      source: "Airline Weekly",
      date: "July 23, 2025",
      content:
        "Delta Airlines experienced unprecedented passenger volumes over the summer travel season, leading to optimistic revenue projections for the next quarter. Load factors remained strong.",
    },
  ],
};

const NewsSection = styled.div`
  color: #f7f8fa; /* Matches Heading lightText */
  padding: 80px 20px; /* Adjusted padding to be closer to InfoSec's 160px/2 */
  background: #101522; /* Matches InfoSec dark background */
  margin: 60px auto; /* Adjust margin to give space around it */
  max-width: 1100px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); /* Slightly darker shadow */
  font-family: "Arial", sans-serif; /* Example font-family, adjust to your global font */

  h2 {
    font-size: 40px; /* Closer to your Heading font-size */
    line-height: 1.1;
    font-weight: 600;
    color: #f7f8fa; /* Matches Heading lightText */
    text-align: center;
    margin-bottom: 40px; /* More space below heading */

    @media screen and (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 60px 15px;
    margin: 40px auto;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px; /* Increased margin */
  border-bottom: 2px solid #333; /* Subtle divider */

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin-bottom: 25px;
  }
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 15px 25px;
  font-size: 1.1rem;
  font-weight: 700; /* Match TopLine font-weight */
  color: #a9b3c1; /* Similar to lightTopLine color */
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: 3px solid transparent; /* For active indicator */
  margin: 0 10px; /* Space between tabs */

  &:hover {
    color: #f7f8fa; /* Lighter on hover */
    border-bottom: 3px solid #a9b3c1; /* Softer hover border */
  }

  ${({ isActive }) =>
    isActive &&
    `
    color: #4B59F7; /* Matches your TopLine active color */
    border-bottom: 3px solid #4B59F7; /* Solid accent for active */
  `}

  @media screen and (max-width: 768px) {
    padding: 10px 15px;
    font-size: 1rem;
    margin: 5px;
  }
`;

const NewsContent = styled.div`
  /* No specific padding here, handled by NewsItem */
`;

const NewsItem = styled.div`
  background: #1c2237; /* A slightly lighter dark background for items, similar to Heading lightText default */
  padding: 25px; /* Slightly more padding */
  margin-bottom: 20px; /* More space between items */
  border-radius: 8px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-5px); /* More pronounced lift on hover */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }

  h3 {
    font-size: 1.6rem; /* Slightly larger heading for news items */
    color: #4b59f7; /* Matches your TopLine accent color */
    margin-bottom: 10px; /* More space below title */
    line-height: 1.3;

    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1rem; /* Closer to your Subtitle font-size */
    color: #a9b3c1; /* Matches Subtitle lightTextDesc */
    line-height: 1.6; /* Slightly more line height for readability */
    margin-bottom: 15px;
  }

  span {
    font-size: 0.85rem; /* Slightly larger than before for readability */
    color: #999; /* Maintain a slightly muted color for metadata */
    display: block;
    margin-top: 5px;
  }
`;

const FinancialNewsTabs = () => {
  const [activeTab, setActiveTab] = useState("Top Headlines"); // Initial active tab

  const currentNews = newsData[activeTab] || []; // Get news for the active tab

  return (
    <NewsSection>
      <h2>Latest Financial News</h2>
      <TabsContainer>
        {Object.keys(newsData).map((tabName) => (
          <TabButton
            key={tabName}
            isActive={activeTab === tabName}
            onClick={() => setActiveTab(tabName)}
          >
            {tabName}
          </TabButton>
        ))}
      </TabsContainer>

      <NewsContent>
        {currentNews.length > 0 ? (
          currentNews.map((item) => (
            <NewsItem key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <span>
                Source: {item.source} | Date: {item.date}
              </span>
            </NewsItem>
          ))
        ) : (
          <p>No news available for this category.</p>
        )}
      </NewsContent>
    </NewsSection>
  );
};

export default FinancialNewsTabs;
