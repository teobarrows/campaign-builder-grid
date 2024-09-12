import React, { useEffect } from 'react';
import './style.css';
import { Autocomplete, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function App() {
  const [isPaneOpen, setIsPaneOpen] = React.useState(false);
  const [panePosition, setPanePosition] = React.useState(400);
  const [windowHeight, setWindowHeight] = React.useState(0);
  const [baseURL, setBaseURL] = React.useState('/');
  const [selectedThumb, setSelectedThumb] = React.useState('');
  const [touchpoints, setTouchpoints] = React.useState([]);
  const [touchpointDropValue, setTouchpointDropValue] = React.useState('');
  const togglePane = (e) => {
    if (isPaneOpen) {
      window.scrollTo({ top: 262, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsPaneOpen(!isPaneOpen);
  };

  const inputSx = {
    width: '100%',
    textAlign: 'left',
    '& fieldset': {
      borderRadius: '12px',
    },
    '& .MuiIconButton-sizeMedium': {
      transform: 'scale(1.5)',
      color: '#225CDB',
      marginRight: '4px',
    },
    '& .MuiAutocomplete-clearIndicator': {
      display: 'none',
    },
  };

  const thumbClick = (e) => {
    // document.getElementById('pane').scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({ top: 90, behavior: 'smooth' });
    setSelectedThumb(e.target.style.backgroundImage);
    setIsPaneOpen(true);
    let element = e.target;
    let tpName = element.children[0].children[0].innerText;
    console.log(tpName);
    setTouchpointDropValue(tpName);
  };

  useEffect(() => {
    if (window.location.hostname === 'localhost') {
      setBaseURL('/1080x1080/');
    } else {
      setBaseURL('https://assets.barrowsconnectedstore.com/thumbnails/1080x1080/');
    }
    // eslint-disable-next-line no-restricted-globals
    setPanePosition(isPaneOpen ? 360 : screen.height + 560);
    // eslint-disable-next-line no-restricted-globals
    setWindowHeight(window.innerHeight);
  }, [isPaneOpen]);

  useEffect(() => {
    Object.keys(thumbs).forEach((thumb) => {
      setTouchpoints((prev) => [...prev, { label: thumbs[thumb].name }]);
    });
    setTimeout(() => {
      document.getElementById('loader').style.scale = '100';
      document.getElementById('loader').style.opacity = '0';
    }, 2100);
    setTimeout(() => {
      document.getElementById('loader-bottom').style.height = windowHeight / 2 + 'px';
      document.getElementById('loader-top').style.height = windowHeight / 2 + 'px';
    }, 2300);
    setTimeout(() => {
      document.getElementById('main-app').style.display = 'flex';
    }, 2500);
    setTimeout(() => {
      document.getElementById('main-app').style.opacity = '1';
    }, 2600);
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('loader-top').style.display = 'none';
      document.getElementById('loader-bottom').style.display = 'none';
    }, 3200);
  }, []);

  const thumbClasses =
    'thumb-frame m-2 rounded-md shadow-md object-no-repeat bg-top relative duration-300 cursor-pointer';
  const heroThumbs = 'hero-thumb rounded-md shadow-md object-no-repeat bg-cover bg-top relative duration-300';
  const squareThumbs = 'thumb-square bg-cover rounded-lg shadow-md object-no-repeat bg-top relative duration-300';
  const thumbs = {
    meatBunker: {
      thumb: '/1080x1080/tn-bunker-meat-2.jpg',
      name: 'Bunker Meat & Dairy',
      category: 'Meat & Dairy',
      uniques: ['1.2M', 'Monthly Uniques'],
    },
    wineEnd: {
      thumb: `/1080x1080/tn-wine.jpg`,
      name: 'Wine End Cap',
      category: 'AlcBev',
      uniques: ['1M', 'Monthly Uniques'],
    },
    bakery: {
      thumb: '/1080x1080/tn-bakery.jpg',
      name: 'Counter Display',
      category: 'Bakery',
      uniques: ['500K', 'Monthly Uniques'],
    },
    entrance: {
      thumb: '/1080x1080/tn-entrance-2.jpg',
      name: 'Billboard Entrance',
      category: 'Entrance',
      uniques: ['1.2M', 'Monthly Uniques'],
    },
    pallet: {
      thumb: '/1080x1080/tn-pallet.jpg',
      name: 'Pallet',
      category: 'Dry Grocery',
      uniques: ['75K', 'Monthly Uniques'],
    },
    produceBunker: {
      thumb: '/1080x1080/tn-bunker-produce.jpg',
      name: 'Bunker Produce',
      category: 'Produce',
      uniques: ['1M', 'Monthly Uniques'],
    },
    habaEnd: {
      thumb: '/1080x1080/tn-end-wood.jpg',
      name: 'End Cap Haba',
      category: 'Haba',
      uniques: ['300K', 'Monthly Uniques'],
    },
    blueEnd: {
      thumb: '/1080x1080/tn-endcap-blue.jpg',
      name: 'End Cap Grocery',
      category: 'Grocery',
      uniques: ['320K', 'Monthly Uniques'],
    },
    homeEnd: {
      thumb: '/1080x1080/tn-endcap-orange.jpg',
      name: 'End Cap Household',
      category: 'Household',
      uniques: ['220K', 'Monthly Uniques'],
    },
    rxStandee: {
      thumb: '/1080x1080/tn-standee-rx.jpg',
      name: 'Standee',
      category: 'Pharmacy',
      uniques: ['60K', 'Monthly Uniques'],
    },
    entranceStandee: {
      thumb: '/1080x1080/tn-standee-entrance.jpg',
      name: 'Standee ',
      category: 'Entrance',
      uniques: ['1M', 'Monthly Uniques'],
    },
    seasonalBillboard: {
      thumb: '/1080x1080/tn-seasonal-overhang.jpg',
      name: 'Billboard Seasonal',
      category: 'Seasonal',
      uniques: ['500K', 'Monthly Uniques'],
    },
    habaSmallEnd: {
      thumb: '/1080x1080/tn-end-small.jpg',
      name: 'End Cap',
      category: 'Haba',
      uniques: ['200K', 'Monthly Uniques'],
    },
    sideCap: {
      thumb: `${baseURL}tn-hanging-side.jpg`,
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
      <div className="w-screen flex flex-col justify-center transition-all duration-700" id="main-app">
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
        <div className="w-full h-[6px] bg-[#084999]"></div>
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

            <div className="flex w-full px-4 items-center justify-end h-[60px] shadow-sm relative">
              <div className="absolute items-center justify-center flex top-[14px] left-4">
                <div>
                  <img src="/connect-os-logo-desktop.png" alt="cs logo" className="inline-block w-[120px]" />
                </div>
                <div className="h-[32px] border-r-[1px] mx-3"></div>
                <div>
                  <img src="/kroger-logo.png" alt="kroger logo" className="block w-[60px]" />
                </div>
              </div>
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
              <div
                className="flex w-16 h-16 absolute m-auto left-0 right-0 shadow-md -top-[30px] rounded-full justify-center items-center bg-white border-[1px] hover:bg-slate-100 hover:scale-110 transition-all cursor-pointer"
                onClick={togglePane}
                id={'pane'}
              >
                <span className="material-symbols-outlined my-4 scale-150 mt-[19px] cursor-pointer">
                  {isPaneOpen ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                </span>
              </div>
              <div className="curve w-full bg-white shadow-pane"></div>
              <div className="flex flex-col bg-white">
                <div className="text-4xl roboto-thin uppercase mx-20 mb-12 text-slate-500">Touchpoint & Category</div>
                <div className="flex w-full bg-white items-center justify-center">
                  <div className="flex items-start justify-center mx-12 bg-white w-full rounded-md bg-contain bg-no-repeat bg-top mb-[600px]">
                    <div className="flex w-2/3 flex-col">
                      <div className="flex w-full">
                        <div className="flex w-1/2 mx-8 flex-col">
                          <Autocomplete
                            disablePortal
                            defaultValue={''}
                            value={touchpointDropValue}
                            options={touchpoints}
                            sx={inputSx}
                            renderInput={(params) => <TextField {...params} label="Touchpoint" />}
                            onChange={(event, value) => {
                              Object.keys(thumbs).forEach((thumb) => {
                                if (thumbs[thumb].name === value.label) {
                                  document.getElementById('form-thumb').style.backgroundImage =
                                    'url("' + thumbs[thumb].thumb + '")';
                                  console.log(thumbs[thumb].thumb);
                                  setTouchpointDropValue(value.label);
                                }
                              });
                            }}
                          />
                        </div>
                        <div className="flex w-1/2 mx-8">
                          <Autocomplete
                            disablePortal
                            sx={inputSx}
                            // defaultValue={{ label: 'Health and Beauty' }}
                            options={[{ label: 'Health and Beauty' }, { label: 'Grocery' }]}
                            renderInput={(params) => <TextField {...params} label="Category" />}
                          />
                        </div>
                      </div>
                      <div className="text-4xl roboto-thin uppercase ml-8 my-12 text-slate-500">Duration</div>
                      <div className="flex w-full">
                        <div className="flex w-1/2 mx-8 flex-col">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']} sx={{ marginBottom: '-16px' }}>
                              <DatePicker
                                label="Start Date"
                                sx={{
                                  width: '100%',
                                  textAlign: 'left',
                                  '& fieldset': {
                                    borderRadius: '12px',
                                  },
                                  '& .MuiIconButton-sizeMedium': {
                                    transform: 'scale(1.2)',
                                    color: '#225CDB',
                                    marginRight: '4px',
                                  },
                                }}
                              />
                            </DemoContainer>
                          </LocalizationProvider>
                        </div>
                        <div className="flex w-1/2 mx-8 flex-col">
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']} sx={{ marginBottom: '-16px' }}>
                              <DatePicker
                                label="End Date"
                                sx={{
                                  width: '100%',
                                  textAlign: 'left',
                                  '& fieldset': {
                                    borderRadius: '12px',
                                  },
                                  '& .MuiIconButton-sizeMedium': {
                                    transform: 'scale(1.2)',
                                    color: '#225CDB',
                                    marginRight: '4px',
                                  },
                                }}
                              />
                            </DemoContainer>
                          </LocalizationProvider>
                        </div>
                      </div>
                      <div className="text-4xl roboto-thin uppercase ml-8 my-16 text-slate-500">Brand</div>
                      <div className="flex w-1/1 mx-8">
                        <Autocomplete
                          disablePortal
                          sx={inputSx}
                          // defaultValue={{ label: 'Coca Cola' }}
                          options={[{ label: 'Coca Cola' }, { label: 'Unilever' }]}
                          renderInput={(params) => <TextField {...params} label="Holiding Company" />}
                        />
                      </div>
                      <div className="flex w-1/1 mx-8 pt-12">
                        <Autocomplete
                          multiple
                          id="tags-outlined"
                          options={brandsObj}
                          getOptionLabel={(option) => option.title}
                          // defaultValue={[brandsObj[0], brandsObj[1]]}
                          filterSelectedOptions
                          renderInput={(params) => <TextField {...params} label="Brands" placeholder="" />}
                          sx={inputSx}
                        />
                      </div>
                    </div>
                    <div className="flex w-1/3 mx-8">
                      <div
                        id="form-thumb"
                        className={
                          selectedThumb ? squareThumbs : 'bg-slate-50 border-2 min-w-full min-h-[500px] rounded-xl'
                        }
                        style={{
                          // backgroundImage: 'url("' + thumbs.habaSmallEnd.thumb + '")',
                          backgroundImage: selectedThumb,
                          backgroundRepeat: 'no-repeat',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="desktop mx-8 mt-8 mb-6">
              <div className="text-[48px] text-slate-400 ml-1 mt-4 mb-10 uppercase roboto-thin">Campaigns</div>

              <div className="flex mt-8 ml-2 mr-2 mb-4 border-b-[1px] text-sm">
                <div className="relative flex justify-center items-center flex-col bg-blue-600 text-white min-w-[120px] rounded-t-[1px]">
                  <div className="mx-4 my-2">Create</div>
                  <div className="absolute h-[3px] bg-cyan-300 w-full bottom-[-3px] rounded-b-[1px]"></div>
                </div>
                <div className="flex justify-center items-center text-slate-400 px-4 min-w-[120px] transition-all">
                  Upload Media
                </div>
              </div>

              <div className="desktop-left">
                <div
                  className={heroThumbs}
                  style={{
                    backgroundImage: 'url("' + thumbs.wineEnd.thumb + '")',
                    backgroundRepeat: 'no-repeat',
                  }}
                  onClick={thumbClick}
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
                    onClick={thumbClick}
                  >
                    {renderThumbnail(thumbs.entrance, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.blueEnd.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={thumbClick}
                  >
                    {renderThumbnail(thumbs.blueEnd, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.habaEnd.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={thumbClick}
                  >
                    {renderThumbnail(thumbs.habaEnd, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.sideCap.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={thumbClick}
                  >
                    {renderThumbnail(thumbs.sideCap, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.seasonalBillboard.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={thumbClick}
                  >
                    {renderThumbnail(thumbs.seasonalBillboard, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.entranceStandee.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={thumbClick}
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
                    onClick={thumbClick}
                  >
                    {renderThumbnail(thumbs.homeEnd, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.bakery.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={thumbClick}
                  >
                    {renderThumbnail(thumbs.bakery, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.meatBunker.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={thumbClick}
                  >
                    {renderThumbnail(thumbs.meatBunker, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.produceBunker.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={thumbClick}
                  >
                    {renderThumbnail(thumbs.produceBunker, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.habaSmallEnd.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={thumbClick}
                  >
                    {renderThumbnail(thumbs.habaSmallEnd, false)}
                  </div>
                  <div
                    className={thumbClasses}
                    style={{
                      backgroundImage: 'url("' + thumbs.rxStandee.thumb + '")',
                      backgroundRepeat: 'no-repeat',
                    }}
                    onClick={thumbClick}
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
                  onClick={thumbClick}
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
      <div
        id="loader-top"
        className="absolute top-0 left-0 w-full h-1/2 bg-black z-30 transition-all duration-700"
      ></div>
      <div
        id="loader-bottom"
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-30 transition-all duration-700"
      ></div>
      <div
        id="loader"
        className="flex absolute top-0 left-0 flex-col items-center justify-center w-full h-full z-40 transition-all duration-700"
      >
        <div className="loader"></div>
      </div>
    </>
  );
}

const brandsObj = [
  { title: 'Coke Zero', holding: 'Coca Cola' },
  { title: 'Coke Classic', holding: 'Coca Cola' },
];

export default App;
