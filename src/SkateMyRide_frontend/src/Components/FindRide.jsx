import React from 'react';

const FilterButton = ({ text }) => (
  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#EEEEEE] pl-4 pr-4">
    <p className="text-black text-sm font-medium leading-normal">{text}</p>
  </div>
);

const RideOption = ({ imageUrl }) => (
  <div className="flex items-center gap-4 bg-[#FFFFFF] px-4 min-h-[72px] py-2">
    <div
      className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    ></div>
    <div className="flex flex-col justify-center">
      <p className="text-black text-base font-medium leading-normal line-clamp-1">John</p>
      <p className="text-[#6B6B6B] text-sm font-normal leading-normal line-clamp-2">9:00am - 3:00pm</p>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-black tracking-light text-[32px] font-bold leading-tight">Find a ride</p>
                <p className="text-[#6B6B6B] text-sm font-normal leading-normal">From SF to LA, 10/1/2022</p>
              </div>
            </div>
            {/* Location components (San Francisco and Los Angeles) */}
            {/* ... (Add the location components here) */}
          </div>
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <h3 className="text-black text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Filter</h3>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <FilterButton text="Price" />
              <FilterButton text="Time" />
              <FilterButton text="Seats" />
              <FilterButton text="Stops" />
            </div>
            <h3 className="text-black text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Sort</h3>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <FilterButton text="Cheapest" />
              <FilterButton text="Fastest" />
              <FilterButton text="Best" />
            </div>
            <RideOption imageUrl="https://cdn.usegalileo.ai/stability/58348c4c-6474-4c26-86de-da2ee5e08776.png" />
            <RideOption imageUrl="https://cdn.usegalileo.ai/stability/5d81098b-68f9-4d78-8392-a310dc6223cd.png" />
            <RideOption imageUrl="https://cdn.usegalileo.ai/stability/68ed5394-6006-4b47-968c-f2f8b6f0b8ad.png" />
            <RideOption imageUrl="https://cdn.usegalileo.ai/stability/b3e2ad02-86fe-411e-a707-d1beaf1a3f6e.png" />
            <RideOption imageUrl="https://cdn.usegalileo.ai/stability/999b3422-01c9-4f3e-8c0c-f445f6a1e971.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;