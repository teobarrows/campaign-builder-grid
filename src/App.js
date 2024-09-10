import React, { useEffect } from 'react';
import './style.css';

function App() {
  const [isPaneOpen, setIsPaneOpen] = React.useState(true);
  const [panePosition, setPanePosition] = React.useState(400);
  const [windowHeight, setWindowHeight] = React.useState(0);
  const togglePane = (e) => {
    if (isPaneOpen) {
      window.scrollTo({ top: 262, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsPaneOpen(!isPaneOpen);
  };

  useEffect(() => {
    // eslint-disable-next-line no-restricted-globals
    setPanePosition(isPaneOpen ? 360 : screen.height + 560);
    // eslint-disable-next-line no-restricted-globals
    setWindowHeight(window.innerHeight);
  }, [isPaneOpen]);

  const thumbClasses =
    'thumb-frame m-2 rounded-md shadow-md object-no-repeat bg-top relative hover:scale-[102%] hover:hue-rotate-90 transition-all cursor-pointer';
  const heroThumbs = 'hero-thumb rounded-md shadow-md object-no-repeat bg-cover bg-top relative';
  const thumbs = {
    meatBunker: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-bunker-meat-2.jpg',
      name: 'Bunker',
      category: 'Meat & Dairy',
      uniques: ['1.2M', 'Monthly Uniques'],
    },
    wineEnd: {
      // thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/1080x1080/tn-wine.jpg',
      thumb: '/1080x1080/tn-wine.jpg',
      name: 'Wine End Cap',
      category: 'AlcBev',
      uniques: ['1M', 'Monthly Uniques'],
    },
    bakery: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-bakery.jpg',
      name: 'Counter Display',
      category: 'Bakery',
      uniques: ['500K', 'Monthly Uniques'],
    },
    entrance: {
      // thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-entrance-2.jpg',
      thumb: '/1080x1080/tn-entrance-2.jpg',
      name: 'Billboard',
      category: 'Entrance',
      uniques: ['1.2M', 'Monthly Uniques'],
    },
    pallet: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-pallet.jpg',
      name: 'Pallet',
      category: 'Dry Grocery',
      uniques: ['75K', 'Monthly Uniques'],
    },
    produceBunker: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-bunker-produce.jpg',
      name: 'Bunker',
      category: 'Produce',
      uniques: ['1M', 'Monthly Uniques'],
    },
    habaEnd: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-end-wood.jpg',
      name: 'End Cap',
      category: 'Haba',
      uniques: ['300K', 'Monthly Uniques'],
    },
    blueEnd: {
      // thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-endcap-blue.jpg',
      thumb: '/1080x1080/tn-endcap-blue.jpg',
      name: 'End Cap',
      category: 'Grocery',
      uniques: ['320K', 'Monthly Uniques'],
    },
    homeEnd: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-endcap-orange.jpg',
      name: 'End Cap',
      category: 'Household',
      uniques: ['220K', 'Monthly Uniques'],
    },
    rxStandee: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-standee-rx.jpg',
      name: 'Standee',
      category: 'Pharmacy',
      uniques: ['60K', 'Monthly Uniques'],
    },
    entranceStandee: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-standee-entrance.jpg',
      name: 'Standee',
      category: 'Entrance',
      uniques: ['1M', 'Monthly Uniques'],
    },
    seasonalBillboard: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-seasonal-overhang.jpg',
      name: 'Billboard',
      category: 'Seasonal',
      uniques: ['500K', 'Monthly Uniques'],
    },
    habaSmallEnd: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-end-small.jpg',
      name: 'End Cap',
      category: 'Haba',
      uniques: ['200K', 'Monthly Uniques'],
    },
    sideCap: {
      thumb: 'https://assets.barrowsconnectedstore.com/thumbnails/350x350/tn-hanging-side.jpg',
      name: 'Side Cap',
      category: 'Frozen',
      uniques: ['400K', 'Monthly Uniques'],
    },
  };
  const renderThumbnail = (unit, hero = false, phone = false) => {
    return (
      <>
        {unitDescription(
          {
            name: unit.name,
            category: unit.category,
            uniques: unit.uniques,
          },
          phone
        )}
      </>
    );
  };

  const unitDescription = (unitObj, phone) => {
    return (
      <div className="bg-white rounded-b-md absolute bottom-0 w-[100%] min-h-[50px] m-0 p-2 align-top">
        <p className="roboto-medium text-md text-slate-600 thumb-title">{unitObj.name}</p>
        <p className="roboto-light text-sm text-slate-400 mb-2 thumb-subtitle">{unitObj.category}</p>
        <p className="roboto-bold text-slate-400 text-xs ">
          <span className="text-blue-900 thumb-uniques">{unitObj.uniques[0]} </span>
          <span className="thumb-uniques">{unitObj.uniques[1]}</span>
        </p>
      </div>
    );
  };
  return (
    <>
      <div className="w-screen flex flex-col justify-center">
        <div className="mobile">
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.wineEnd.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.wineEnd, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.entrance.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.entrance, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.blueEnd.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.blueEnd, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.habaEnd.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.habaEnd, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.sideCap.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.sideCap, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.seasonalBillboard.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.seasonalBillboard, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.entranceStandee.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.entranceStandee, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.homeEnd.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.homeEnd, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.bakery.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.bakery, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.meatBunker.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.meatBunker, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.produceBunker.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.produceBunker, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.habaSmallEnd.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.habaSmallEnd, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.rxStandee.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.rxStandee, false)}
          </div>
          <div
            className={thumbClasses}
            style={{
              backgroundImage: 'url("' + thumbs.pallet.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.rxStandee, false)}
          </div>
        </div>

        <div className={`nav-wrap flex flex-row bg-white`} style={{ height: windowHeight * 2 + 'px' }}>
          <div className="relative flex min-w-[74px] min-h-full shadow-md flex-col items-center pt-[22px] bg-white">
            <span className="material-symbols-outlined hover:text-blue-600 cursor-pointer mb-12">start</span>
            <div className="relative flex justify-center w-full bg-white hover:bg-slate-50 transition-all cursor-pointer">
              <span className="material-symbols-outlined my-4">dashboard</span>
            </div>
            <div className="relative flex justify-center w-full bg-white hover:bg-slate-50 transition-all cursor-pointer">
              <span className="material-symbols-outlined my-4">network_check</span>
            </div>
            <div className="relative flex justify-center w-full bg-white hover:bg-slate-50 transition-all cursor-pointer">
              <span className="material-symbols-outlined my-4">ad_group</span>
            </div>
            <div className="relative flex justify-center w-full bg-slate-100 hover:bg-slate-100 transition-all">
              <div className="absolute right-0 top-0 w-[4px] h-full bg-blue-600"></div>
              <span className="material-symbols-outlined my-4">bar_chart_4_bars</span>
            </div>
            <div className="relative flex justify-center w-full bg-white hover:bg-slate-50 transition-all cursor-pointer">
              <span className="material-symbols-outlined my-4">support</span>
            </div>
          </div>

          <div className="flex flex-col w-full">
            {/*Top Bar*/}

            <div className="flex w-full px-4 items-center justify-end h-[60px] shadow-sm">
              <div className="px-4">
                <div className="relative flex items-center justify-center bg-blue-600 w-[32px] h-[32px] rounded-[16px] p-2 cursor-pointer hover:bg-blue-500 transition-all">
                  <span className="material-symbols-outlined text-white">notifications</span>

                  <div className="absolute top-[-4px] right-[-4px] rounded-[9px] flex items-center justify-center w-[16px] h-[16px] text-white text-[8px] hover:bg-red-700 transition-all">
                    {/*9+*/}
                  </div>
                </div>
              </div>
              <div className="flex items-center pl-4 border-l-[1px]">
                <div className="flex flex-col items-center pr-4">
                  <div className="text-xs text-slate-600 text-center">Jane</div>
                </div>
                <div className="relative w-[42px] h-[42px] rounded-[21px] overflow-hidden">
                  <div className="w-[42px] h-[42px] rounded-[21px] hover:grayscale hover:scale-110 transition-all bg-[url('https://i.pinimg.com/originals/3e/2e/8c/3e2e8c6fa626636eb4e8bdfe78edab3b.jpg')] bg-cover" />
                </div>
              </div>
            </div>

            <div
              className={`pane flex flex-col w-full absolute m-auto left-0 right-0 box z-20 ease-in-out duration-500`}
              style={{ top: panePosition + 'px', height: windowHeight + 660 + 'px' }}
            >
              <div></div>
              <div
                className="flex w-16 h-16 absolute m-auto left-0 right-0 shadow-md -top-6 rounded-full justify-center items-center bg-white"
                onClick={togglePane}
              >
                <span className="material-symbols-outlined my-4 scale-150 mt-[19px] cursor-pointer">
                  {isPaneOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                </span>
              </div>
              <div className="curve w-full bg-white shadow-pane"></div>
              <div className="flex w-full h-full bg-white items-center justify-center">
                <div className="flex items-center justify-center m-12 bg-slate-100 h-full w-full rounded-md">
                  Form here
                </div>
              </div>
            </div>

            <div className="desktop mx-8 mt-8 mb-6">
              <div className="text-[48px] text-slate-400 ml-1 mt-4 mb-10 uppercase roboto-thin">Campaigns</div>

              <div className="flex mt-8 ml-2 mr-2 mb-4 border-b-[1px] text-sm">
                <div className="relative flex justify-center items-center flex-col bg-blue-600 text-white min-w-[120px] rounded-t-[1px]">
                  <div className="mx-4 my-2">Book</div>
                  <div className="absolute h-[3px] bg-cyan-300 w-full bottom-[-3px] rounded-b-[1px]"></div>
                </div>
                <div className="flex justify-center items-center text-black px-4 min-w-[120px] hover:bg-slate-100 transition-all cursor-pointer">
                  List View
                </div>
                <div className="flex justify-center items-center text-black px-4 min-w-[120px] hover:bg-slate-100 transition-all cursor-pointer">
                  Media Plays
                </div>
              </div>

              <div className="desktop-left">
                <div
                  className={heroThumbs}
                  style={{
                    backgroundImage: 'url("' + thumbs.wineEnd.thumb + '")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionY: '-36px',
                  }}
                >
                  {renderThumbnail(thumbs.wineEnd, true)}
                </div>
                <div className="desktop-thumb-rows">
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.entrance.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.entrance, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.blueEnd.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPositionY: '-16px',
                    }}
                  >
                    {renderThumbnail(thumbs.blueEnd, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.habaEnd.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.habaEnd, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.sideCap.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.sideCap, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.seasonalBillboard.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.seasonalBillboard, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.entranceStandee.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.entranceStandee, false)}
                  </div>
                </div>
              </div>
              <div className="desktop-right">
                <div className="desktop-thumb-rows">
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.homeEnd.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.homeEnd, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.bakery.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.bakery, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.meatBunker.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.meatBunker, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.produceBunker.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.produceBunker, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.habaSmallEnd.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.habaSmallEnd, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.rxStandee.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {renderThumbnail(thumbs.rxStandee, false)}
                  </div>
                </div>
                <div
                  className={heroThumbs}
                  style={{
                    backgroundImage: 'url("' + thumbs.pallet.thumb + '")',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  {renderThumbnail(thumbs.pallet, true)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="large-screen">
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.wineEnd.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.wineEnd, true)}
          </div>

          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.entrance.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.entrance, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.blueEnd.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.blueEnd, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.habaEnd.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.habaEnd, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.sideCap.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.sideCap, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.seasonalBillboard.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.seasonalBillboard, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.entranceStandee.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.entranceStandee, false)}
          </div>

          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.homeEnd.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.homeEnd, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.bakery.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.bakery, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.meatBunker.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.meatBunker, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.produceBunker.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.produceBunker, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.habaSmallEnd.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.habaSmallEnd, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.rxStandee.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.rxStandee, false)}
          </div>
          <div
            className={heroThumbs}
            style={{
              backgroundImage: 'url("' + thumbs.pallet.thumb + '")',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {renderThumbnail(thumbs.pallet, true)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
