import React from "react";

const Stats = () => {
  return (
    <section className="bg-linear-to-r from-violet-600 to-purple-600 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 text-center text-white gap-8">
        
        {/* Stat 1 */}
        <div>
          <h2 className="text-4xl font-bold mb-2">50K+</h2>
          <p className="text-violet-100">Active Users</p>
        </div>

        {/* Stat 2 */}
        <div>
          <h2 className="text-4xl font-bold mb-2">200+</h2>
          <p className="text-violet-100">Premium Tools</p>
        </div>

        {/* Stat 3 */}
        <div>
          <h2 className="text-4xl font-bold mb-2">4.9</h2>
          <p className="text-violet-100">User Rating</p>
        </div>

      </div>
    </section>
  );
};

export default Stats;