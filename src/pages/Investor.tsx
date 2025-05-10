

const Investor = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Samoa Gaming Gateway</h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Revolutionizing the Pacific gaming industry with blockchain technology, 
          community engagement, and real-time tournaments.
        </p>
      </div>

      {/* Opportunity & Solution */}
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">The Opportunity</h2>
          <p className="mb-4">
            The Pacific gaming market is projected to grow to $X billion by 2026, with an exceptional 
            CAGR of X%. Samoa Gaming Gateway is positioned to capture this emerging market with our 
            innovative platform connecting mobile wallets, real-time gaming, and community engagement.
          </p>
          <p>
            Our first-mover advantage in the region provides us with unparalleled market access 
            and strong partnerships with local gaming communities.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          <p className="mb-4">
            Samoa Gaming Gateway creates a seamless ecosystem that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Connects mobile wallets for easy transactions</li>
            <li>Hosts real-time tournaments with live streaming</li>
            <li>Enables community tipping and engagement</li>
            <li>Showcases tournament highlights and memorable moments</li>
            <li>Provides secure blockchain-based transaction management</li>
          </ul>
        </div>
      </div>

      {/* Funding Objectives */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Funding Objectives</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg bg-white shadow-md">
            <h3 className="text-xl font-bold mb-3">Backend Database</h3>
            <p>Funding for robust, scalable database architecture to support thousands of concurrent users and real-time data processing.</p>
          </div>
          <div className="border p-6 rounded-lg bg-white shadow-md">
            <h3 className="text-xl font-bold mb-3">Mobile Wallet Integration</h3>
            <p>Development of secure API connections to multiple mobile wallet providers and blockchain networks in the Pacific region.</p>
          </div>
          <div className="border p-6 rounded-lg bg-white shadow-md">
            <h3 className="text-xl font-bold mb-3">Live Gaming Infrastructure</h3>
            <p>Building the streaming and content delivery network to support real-time game broadcasting and highlight clip generation.</p>
          </div>
        </div>
      </div>

      {/* Market Traction */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Market Traction</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600">100+</p>
            <p className="text-gray-600">Beta Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">10+</p>
            <p className="text-gray-600">Local Gaming Guilds Engaged</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">3</p>
            <p className="text-gray-600">Pilot Tournaments Hosted</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">1st</p>
            <p className="text-gray-600">Blockchain Gaming Initiative in Samoa</p>
          </div>
        </div>
      </div>

      {/* Monetization Strategy */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Monetization Strategy</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Transaction Fees</h3>
            <p>Micro-fees on tournament entries, wallet transfers, and community tipping.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Ad Revenue & Sponsorships</h3>
            <p>In-game ads, streaming sponsorships, and branded events.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Premium Features</h3>
            <p>Subscription tiers for advanced analytics, exclusive tournaments, and VIP rewards.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">NFT Marketplace</h3>
            <p>Sales and trading of limited-edition gaming assets and player collectibles.</p>
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Strategic Partnerships</h2>
        <ul className="list-disc pl-8 space-y-2 text-gray-700 max-w-3xl mx-auto">
          <li>Collaboration with local ISPs for optimized game streaming</li>
          <li>Alliances with mobile wallet providers for secure integration</li>
          <li>Engagement with Samoa’s digital economy and youth development initiatives</li>
          <li>NGO support for education, digital literacy, and inclusive gaming programs</li>
        </ul>
      </div>

      {/* Why Invest */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Invest in Samoa Gaming Gateway?</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Be part of the first blockchain gaming ecosystem in the Pacific, unlocking 
          community-driven esports, youth innovation, and inclusive digital finance. 
          Our unique geographic positioning, early adoption incentives, and local partnerships 
          ensure a scalable and sustainable venture.
        </p>
      </div>
    </div>
  );
};

export default Investor;
