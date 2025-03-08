import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        {/* side bare */}
        <div className="col-span-3">
          <h1>side bare</h1>
        </div>
        {/* dashboars content */}
        <div className="col-span-9">
          {children}
        
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
