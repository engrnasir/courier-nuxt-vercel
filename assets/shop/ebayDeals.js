

const specialDeals = [
  { 
    textdeal:true, 
    store:'ebay', 
    img: 'logo/ebay.png', 
    thumbnail: 'ebay/ipad.webp', 
    bannerURL:'',
    title: 'Ebay', 
    text: 'Apple iPad Pro 5th Gen 12.9inch 128GB Wi-Fi+Cellular (Unlocked) 2021- Space Gray', 
    link: 'https://www.ebay.com/itm/175894100329?_trkparms=5373%3A0%7C5374%3AFeatured&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&customid=&toolid=10001&mkevt=1', 
    category: 'electronics' ,
    price:'$799.99'
  },
  // 2
  { 
    textdeal:true, 
    store:'ebay', 
    img: 'logo/ebay.png', 
    thumbnail: 'ebay/APPLE_WATCH_White.webp', 
    bannerURL:'',
    title: 'Ebay', 
    text: 'NEW APPLE WATCH SERIES 8 41MM GPS SILVER ALUMINUM CASE WITH WHITE SPORT BAND S/M', 
    link: 'https://www.ebay.com/itm/145107092129?amdata=enc%3AAQAIAAAAkDUeNTTJAfsBD7Jn3sURv%2FaX4Dzyvs%2BQ7e%2BSFJs2gTjGhoDHDGzjpcFmjntrO96LbcUzwH94t7vZKt9Z%2BVv77eDEhZj28TONhCglLJ9VExGLI9iT2ummyvBcjrl3yyuTtJaA7u0T%2FxhuAYaWQjjrgLDs3sJXhGATRTjGsBKwjkDuBdmaa5WcsHB8VSzYg8rkDg%3D%3D&mkcid=1&mkrid=711-53200-19255-0&toolid=20023&campid=5339002585&customid=&siteid=0&mkevt=1', 
    category: 'electronics',
    price:'$289.99'
},
// 3
{ 
  textdeal:true, 
  store:'ebay', 
  img: 'logo/ebay.png', 
  thumbnail: 'ebay/samg998u-b.webp', 
  bannerURL:'',
  title: 'Ebay', 
  text: 'Samsung Galaxy G998U S21 Ultra 5G 128GB Unlocked Smartphone - Good', 
  estext: "Samsung Galaxy G998U S21 Ultra 5G 128GB Unlocked Smartphone - Good", 
  link: 'https://www.ebay.com/itm/255883394766?mkcid=1&mkrid=711-53200-19255-0&toolid=20023&campid=5339002585&customid=&siteid=0&mkevt=1', 
  category: 'electronics',
  price:'$309.99'
},
// 4
{ textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/ASUSlaptop.webp', title: 'Ebay', text: 'ASUS ROG Flow Z13 13.4" FHD+ Touch Gaming Laptop i5-12500H 16GB 512GB SSD W11H', link: 'https://ebay.us/t1CiT9', category: 'electronics', price:'$699.99' },
// 5

{ 
  textdeal:true, 
  store:'ebay', 
  img: 'logo/ebay.png', 
  thumbnail: 'ebay/macbook.webp', 
  bannerURL:'',
  title: 'Ebay', 
  text: 'Apple MacBook Pro Mneh3ll/a 2022 All Colors M2 - 8GB -10 GPU - 13.3" 256GB SSD', 
  link: 'https://ebay.us/9W7a4s', 
  category: 'electronics',
  price:'$889.00'
},


// 7
{ 
  textdeal:true, 
  store:'ebay', 
  img: 'logo/ebay.png', 
  thumbnail: 'ebay/djiMini.webp', 
  bannerURL:'',
  title: 'Ebay', 
  text: 'DJI Mini 4 Pro (DJI RC 2) Drone, 4K/60fps Omnidirectional ActiveTrack 360° 20km', 
  link: 'https://ebay.us/pExS0m', 
  category: '',
  price:'$959.00'
},

// 8
{ 
  textdeal:true, 
  store:'ebay', 
  img: 'logo/ebay.png', 
  thumbnail: 'ebay/sportswear.webp', 
  bannerURL:'',
  title: 'Ebay', 
  text: "Nike Men's Active Sportswear Long Sleeve Fleece Workout Gym Pullover Hoodie", 
  link: 'https://www.ebay.com/itm/193525114720?_trkparms=5373%3A0%7C5374%3AFeatured%7C5079%3A6000007260&amdata=enc%3AAQAIAAAAkKkyQsaQawNN1N6d1eyEsfLyeFO6EP2wimI%2Fli5NQCkkP4mu7mZDiQyVM3hG0J9sZF00N1uJGS0WseRxBTMh8UB4iPiTczpeyh%2Fb3LGJqHmMdzF2rZIbUAUWlT7b%2FhpATpavqqWZsbTM2t5O0hnzNMlpsFNKvq2FFZcFqE9Lbe%2BC8izSisbZHvD%2B%2BHeGJ73RLA%3D%3D&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&customid=&toolid=10001&mkevt=1', 
  category: 'electronics',
  price:'$47.88'
},

// 9
{ 
  textdeal:true, 
  store:'ebay', 
  img: 'logo/ebay.png', 
  thumbnail: 'ebay/irobot.webp', 
  bannerURL:'',
  title: 'Ebay', 
  text: 'iRobot Roomba j7+ Self-Emptying Vacuum Cleaning Robot - Certified Refurbished!', 
  link: 'https://ebay.us/ekyIXC', 
  category: 'electronics',
  price:'$279.00'
},

// 10
{ 
  textdeal:true, 
  store:'ebay', 
  img: 'logo/ebay.png', 
  thumbnail: 'ebay/headphone.webp', 
  bannerURL:'',
  title: 'Ebay', 
  text: 'JBL Tune 710BT Wireless Bluetooth Over-ear Headphones, Black', 
  link: 'https://www.ebay.com/itm/394850116603?_trkparms=5373%3A0%7C5374%3AFeatured%7C5079%3A6000010762&amdata=enc%3AAQAIAAAAkBRAMbl663wvmHUR%2BvXqQYF0u2nsOyP3wl9QlCu9kKuG1v%2BxKdCOX%2Fb4eiHvBG%2B6QBetzMcC2BDuKapig%2FKEBZgsEqQzFjhQO6J6y45vk4Ec06RB%2FpWOsa08%2FhZzm9NLZhWsA3hNWuV1iw9%2Fv1XONLQNT9to%2FYcL4dRQeNWd23TscYPZyoIvfEWM9Wt6qWcsBg%3D%3D&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&customid=&toolid=10001&mkevt=1', 
  category: 'electronics',
  price:'$39.95'
},

// 11

// 12
{ 
  textdeal:true, 
  store:'ebay', 
  img: 'logo/ebay.png', 
  thumbnail: 'ebay/s-l500.webp', 
  bannerURL:'',
  title: 'Ebay', 
  text: 'Insta360 X3 5.7K 360° Waterproof Touch Screen Action Camera - 25PC 64GB Bundle', 
  estext: "Insta360 X3 5.7K 360° Waterproof Touch Screen Action Camera - 25PC 64GB Bundle", 
  link: 'https://www.ebay.com/itm/295850865414?amdata=enc%3AAQAIAAAAoDlBrYVH5aq2i92PfbxaVLYOdVKiZT%2F6H3bWTpvHNx542UNDi0OgjZ6fViOHXEgqL%2BZ3kRcq7fQiBKg1OQYt0kBHFcX%2BUEc5CQ6Mypbv6%2B3mLnYSyBtq0YD5tuliO8EikJe5xDsSO4y2OVsz3ikDR3WmvmcHSEZ1IO2Jmx12TIDndSRo9qPzIIl%2FPYzI4JlinFWzThb2EkHPp56%2FuVjS6MI%3D&mkcid=1&mkrid=711-53200-19255-0&toolid=20023&campid=5339002585&customid=&siteid=0&mkevt=1', 
  category: 'electronics' ,
  price:'$529.95',
},

// 13

{ 
  textdeal:true, 
  store:'ebay', 
  img: 'logo/ebay.png', 
  thumbnail: 'ebay/racingWheel.webp', 
  bannerURL:'',
  title: 'Ebay', 
  text: 'Logitech G923 Racing Wheel and Pedals for Xbox X|S, Xbox One and PC featuring', 
  link: 'https://www.ebay.com/itm/204297836539?_trkparms=5373%3A0%7C5374%3AFeatured%7C5079%3A6000010762&amdata=enc%3AAQAIAAAAkESdw0dXBumn7eBI3oQBBIK0oX%2FOZ4hR1tFkrIDrN71MRWfodwPE3wB8kQREuhUTlfKdH0sjn10EzoAXvTbBK%2BI7a%2F8dlw%2BA4Sx0LJodQf1%2BskPpyQ%2FA%2F8Tg1fN%2BUY5OyxJKyJ2joSW7i8TaXPTpC9PyhT28%2Bi96%2FGIPflJ07sr63QfpIsl5jk2IQv58FgFn1A%3D%3D&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&customid=&toolid=10001&mkevt=1', 
  category: 'electronics',
  price:'$267.99'
},

// 6
{ textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/hp-envy.webp', title: 'Ebay', text: "HP ENVY 16'' (1TB SSD Intel Core i9-13900H 5.4GHz 16GB RAM) Touch Laptop - Silver (16-H1023DX)", link: 'https://ebay.us/gbOaOI', category: 'electronics', price:'' },


]

const ebayDeals = [


    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/cooking.webp', title: 'Ebay', text: 'Get cooking with up to 50% off', estext: "Ponte a cocinar con hasta un 50% de descuento", link: 'https://www.ebay.com/e/home-garden/kitchen-appliances-051419?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'electronics' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/smartphones.webp', title: 'Ebay', text: 'Up to 50% off smartphones', estext: "Hasta 50% de descuento en teléfonos inteligentes", link: 'https://www.ebay.com/e/_electronics/save-on-cell-phones?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'electronics' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/golf.webp', title: 'Ebay', text: 'Up to 50% off golf equipment', estext: "Hasta 50% de descuento en equipos de golf", link: 'https://www.ebay.com/e/sporting-goods/golf-kick-off?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'sports' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/laptop.webp', title: 'Ebay', text: 'Save up to 50% off laptops', estext: "Ahorre hasta un 50% de descuento en computadoras portátiles", link: 'https://www.ebay.com/e/_electronics/ebay-refurbished-and-new-laptops?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'electronics' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/appleTech.webp', title: 'Ebay', text: 'Up to 60% off Apple tech', estext: "Hasta 60% de descuento en tecnología de Apple", link: 'https://www.ebay.com/e/_electronics/save-on-apple-and-accessories-for-the-latest-models?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'electronics' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/top-home.webp', title: 'Ebay', text: 'Up to 70% off top home brands', estext: "Up to 70% off top home brands", link: 'https://www.ebay.com/e/home-garden/ebay-refurbished-beauty-ska-and-floor-care?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'home-garden' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/latestTech.webp', title: 'Ebay', text: 'Up to 60% off the latest tech', estext: "Up to 60% off the latest tech", link: 'https://www.ebay.com/e/_electronics/top-tech-brands?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'electronics' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/gamingGear.webp', title: 'Ebay', text: 'Get up to 50% off gaming gear', estext: "Get up to 50% off gaming gear", link: 'https://www.ebay.com/e/_electronics/pc-gaming-laptops-and-more?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'sports' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/lenovo.webp', title: 'Ebay', text: 'up to 50% off Lenovo', estext: "up to 50% off Lenovo", link: 'https://www.ebay.com/e/_electronics/new-lenovo-accessories-and-more?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'electronics' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/camera.webp', title: 'Ebay', text: 'Save on cameras & accesories', estext: "Save on cameras & accesories", link: 'https://www.ebay.com/e/_electronics/save-on-cameras-and-accessories?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'electronics' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/tissot.webp', title: 'Ebay', text: 'Up to 70% off Tissot', estext: "Up to 70% off Tissot", link: 'https://www.ebay.com/e/fashion/tissot-032023?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'clothing-accesories' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/appleWatch.webp', title: 'Ebay', text: 'Up to 70% off Apple Watches', estext: "Up to 70% off Apple Watches", link: 'https://www.ebay.com/e/_electronics/ebay-refurbished-apple-watches?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'clothing-accesories' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/DJI.webp', title: 'Ebay', text: 'Up to 25% off DJI', estext: "Up to 25% off DJI", link: 'https://www.ebay.com/e/_electronics/dji-brand-outlet?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'electronics' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/bose.webp', title: 'Ebay', text: 'Up to 40% off Bose', estext: "Up to 40% off Bose", link: 'https://www.ebay.com/e/_electronics/savings-direct-from-bose?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'electronics' },
    { textdeal:true, store:'ebay', img: 'logo/ebay.png', bannerURL:'', thumbnail: 'ebay/headphones.webp', title: 'Ebay', text: 'Up to 60% off headphones', estext: "Up to 60% off headphones", link: 'https://www.ebay.com/e/_electronics/save-on-headphones-and-portable-audio?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&toolid=20014&customid=&mkevt=1', category: 'electronics' },
   
    // 31-OCT-2023
    
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/Cuisinart.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'Cuisinart DCC-1800FR 14 Cup Coffee Maker Silver - Certified Refurbished', 
      link: 'https://ebay.us/QQ2bmI', 
      category: 'electronics' 
    },
    
   
    
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/gimbal.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: "DJI Osmo Pocket 3 3-Axis Gimbal Vlogging Camera with 1'' CMOS & 4K/120fps", 
      link: 'https://www.ebay.com/itm/305227625076?_trkparms=5373%3A0%7C5374%3AFeatured%7C5079%3A6000010762&amdata=enc%3AAQAIAAAAkNuJsoVU1sZFPPjjakZ7sJtWh9wVdmbCiX6fy3UnrsFNtDo0Cledv3I959TooPOyd%2FvwB2PSROrTlbRJgwPyCYCVIKj1h0yAjpil%2FX6MHeQ3XUBVJrdfCh4K497PmEgaszlvMCxzlwTihb8nfsXEsLLh%2FbxuNC9yWxfpWuuxM005AVcEVbyxpscPYJwscfpj4A%3D%3D&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&customid=&toolid=10001&mkevt=1', 
      category: '' 
    },
    
    
    //19-09-2023 
    
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/iphone11pro.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'Apple iPhone 11 Pro Max 64GB Unlocked Smartphone - Very Good', 
      estext: "Apple iPhone 11 Pro Max 64GB Unlocked Smartphone - Very Good", 
      link: 'https://ebay.us/BtJ404', 
      category: 'electronics' 
  },
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/arlo.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'Arlo AVD1001-100NAR Smart Doorbell HD Video Wired - Certified Refurbished', 
      estext: "Arlo AVD1001-100NAR Smart Doorbell HD Video Wired - Certified Refurbished", 
      link: 'https://www.ebay.com/itm/363757625899?_trkparms=5373%3A0%7C5374%3AFeatured&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&customid=&toolid=10001&mkevt=1', 
      category: 'electronics' 
  },
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/harmar.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'Harman Kardon Onyx Studio 6 Portable Bluetooth Speaker - Black', 
      estext: "Harman Kardon Onyx Studio 6 Portable Bluetooth Speaker - Black", 
      link: 'https://ebay.us/hvpKxo', 
      category: 'electronics' 
  },
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/crocs.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'Crocs Offroad Sport Clog', 
      estext: "Crocs Offroad Sport Clog", 
      link: 'https://ebay.us/RccfzR', 
      category: 'electronics' 
  },
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/eufy.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'eufy RoboVac 25C Robotic Vacuum Cleaner Wi-Fi Smart Automatic Sweeper Robot APP', 
      estext: "eufy RoboVac 25C Robotic Vacuum Cleaner Wi-Fi Smart Automatic Sweeper Robot APP", 
      link: 'https://ebay.us/oQlb94', 
      category: 'electronics' 
  },
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/airpods.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'Apple AirPods Pro (2nd Generation) Gen 2 - Excellent', 
      estext: "Apple AirPods Pro (2nd Generation) Gen 2 - Excellent", 
      link: 'https://www.ebay.com/itm/165787124485?_trkparms=5373%3A0%7C5374%3AFeatured%7C5079%3A6000014844&amdata=enc%3AAQAIAAAAkLdnRA00Fbi8egMtRC9Utby5IggUaULv1D5NZFlASMBUSdFgjHfU8kcXA7tRNqBx%2BHzG5OrucXnx%2BxVU14mdjE1i53VFgFmqKCDqDziQ5dLz1sI2%2BTnNxiQmT1Ik7fCvI2JBJCdmvxhbwxowG0Y1JcPVliFD%2B3Qgkswds9oP6%2Fz0L3NbUwssVLgTutkI6RaB3g%3D%3D&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339002585&customid=&toolid=10001&mkevt=1', 
      category: 'electronics' 
  },
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/cleaner.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'Clean more for less', 
      estext: "Clean more for less", 
      link: 'https://ebay.us/vt2LPm', 
      category: 'electronics' 
  },


  
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/s-l50022.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'For iPhone 14 Pro Max 13 12 11 XS XR Shockproof Aluminium Metal Heavy Duty Case', 
      estext: "For iPhone 14 Pro Max 13 12 11 XS XR Shockproof Aluminium Metal Heavy Duty Case", 
      link: 'https://www.ebay.com/itm/394287758273?amdata=enc%3AAQAIAAAAkGb3N6cZeUDutpDjCN%2FeJjKfYKzsAauyjQYEm%2Fznlo2Mq8FiGU7D9aFhCPUSVD8nndapCyOuPfk5bexwh97FdPqEDSmRhuixR54gpuNw6r2BpmlRyWXxesiOydTxZJviT4I8G7yBaaOYP%2F97sKI4wEkSyfAxYIHgz2WLGnv%2FeXpUPE%2BIZ7U%2FsXIFz0T5UuC6hA%3D%3D&mkcid=1&mkrid=711-53200-19255-0&toolid=20023&campid=5339002585&customid=&siteid=0&mkevt=1', 
      category: 'electronics' 
  },
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/minoxdil.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'Kirkland Minoxidil 5% Extra Strength Men Hair Growth Solution - 6 month supply', 
      estext: "Kirkland Minoxidil 5% Extra Strength Men Hair Growth Solution - 6 month supply", 
      link: 'https://www.ebay.com/itm/394347436799?amdata=enc%3AAQAIAAAAkJ2Pk9hCvz6K0Kfqf%2F2M5xNgv9sb7NvZsEfImSxR1Yp%2ByBjZymhG8jTaf57JwL36rrgQQJOypNYHjIgUeRDgDlz%2FAxc3PyKmk9t6SxzjSXqzNIXlfHRySmGresd4zp2yAovxnx5CMK7qjQgQCH%2Bw28gLZun0hh6u4viSeRPYv3myGOr4DK3sDFu16fjnW4pKpg%3D%3D&mkcid=1&mkrid=711-53200-19255-0&toolid=20023&campid=5339002585&customid=&siteid=0&mkevt=1', 
      category: 'electronics' 
  },
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/pilexfil.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: '2x PILEXIL Capsules Hair Loss 2x Box of 100 Pills = 200 Capsules FRESH STOCK NEW', 
      estext: "2x PILEXIL Capsules Hair Loss 2x Box of 100 Pills = 200 Capsules FRESH STOCK NEW", 
      link: 'https://www.ebay.com/itm/275508056837?amdata=enc%3AAQAIAAAAkL2Z786WX%2F58r0jueDyOh%2Fh0oJqAcmNvQ41eyK7%2Bhnk9B3sh75pk5OEG%2BRdi4Zo6CrTRfrb6%2BZVQHq4OvPOn3TxjixQ30Wmb0Snca9GFzX0zALmlaRvwxf2tuAcQXoDUutRgt%2BzQPT%2FDrhQ879IiZGs9zoNFgcrzcq8M02yofvjBRYIWY0lVbs4ioYpk79r9IQ%3D%3D&mkcid=1&mkrid=711-53200-19255-0&toolid=20023&campid=5339002585&customid=&siteid=0&mkevt=1', 
      category: 'electronics' 
  },
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/s-l1600.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: 'Strap for Apple Watch Band Braided Solo Loop Bracelet Series 3 to 8, watch Ultra', 
      estext: "Strap for Apple Watch Band Braided Solo Loop Bracelet Series 3 to 8, watch Ultra", 
      link: 'https://www.ebay.com/itm/255978175226?amdata=enc%3AAQAIAAAAkKJpmZCupc%2F%2BDRMVZF2h884OsLoje7hm0i%2FESRoM58BJh06lMt37cjya3cOTiRcEXasyCvEtByQJB5cSdo25g1QRIBZrFR3g2Ev0LM9oZjOyBelqZERXrbYwdGJZikkI4yBqhBaRa95EwaIhiL%2FEMVWdZLbAWvdVP%2BeW%2B55YmbHSYkmer9uUcsCH2t6bGsyHog%3D%3D&mkcid=1&mkrid=711-53200-19255-0&toolid=20023&campid=5339002585&customid=&siteid=0&mkevt=1', 
      category: 'electronics' 
  },
    { 
      textdeal:true, 
      store:'ebay', 
      img: 'logo/ebay.png', 
      thumbnail: 'ebay/samg998u-b.webp', 
      bannerURL:'',
      title: 'Ebay', 
      text: '40m Diving Case Waterproof Case Housing Shell For Insta360 X3 Sports Camera', 
      estext: "40m Diving Case Waterproof Case Housing Shell For Insta360 X3 Sports Camera", 
      link: 'https://www.ebay.com/itm/266214881359?amdata=enc%3AAQAIAAAAkCs6n8ECAutJyESikInAxWKLtirTdHrxLZ9Xz89hSGG83Q8Hfc%2FN4LUHq79BzhxMtnX1MzJxA88DvxK56T1Hr%2F70hPKgTCPbrNil4J5wHQobvPGBURQUCw1qPyMCPdlYRsTyJ0ZBDQYY4zhLPdoxELtMzW4lrQUUBSpR8zqqY31dJM8Ex4Mx%2BLy476xDp4URkg%3D%3D&mkcid=1&mkrid=711-53200-19255-0&toolid=20023&campid=5339002585&customid=&siteid=0&mkevt=1', 
      category: 'electronics' 
  },
   



  // 06-Nov-2023
    
  {  
    textdeal:true, 
    store:'sonos', 
    img: '', 
    thumbnail: 'ebay/roam-sl-catalog-black.webp', 
    bannerURL:'',
    title: 'Sonos', 
    text: 'Sonos Roam SL - Black', 
    link: 'https://www.dpbolvw.net/click-101000708-13355209?url=https%3A%2F%2Fwww.sonos.com%2Fen-us%2Fshop%2Froam-sl-black.html&cjsku=RMSL1US1BLK', 
    category: 'electronics' ,
    price:'$159.00'
  },
  { 
    textdeal:true, 
    store:'sonos', 
    img: '', 
    thumbnail: 'ebay/sub-mini-left-black-catalog.webp', 
    bannerURL:'',
    title: 'Sonos', 
    text: 'Sonos Sub Mini - Black', 
    link: 'https://www.anrdoezrs.net/click-101000708-13355209?url=https%3A%2F%2Fwww.sonos.com%2Fen-us%2Fshop%2Fsub-mini-black.html&cjsku=SUBM1US1BLK', 
    category: 'electronics' 
  },
  { 
    textdeal:true, 
    store:'Letbricks', 
    img: '', 
    thumbnail: 'ebay/sub-mini-left-black-catalog.webp', 
    bannerURL:'',
    title: 'Letbricks', 
    text: 'Helicopter', 
    link: 'https://www.shareasale.com/m-pr.cfm?merchantID=27731&userID=3838146&productID=1316356939', 
    category: 'electronics' 
  },
  { 
    textdeal:true, 
    store:'Letbricks', 
    img: '', 
    thumbnail: 'ebay/diesel-engine.webp', 
    bannerURL:'',
    title: 'Letbricks', 
    text: 'Diesel Engine', 
    link: 'https://www.shareasale.com/m-pr.cfm?merchantID=27731&userID=3838146&productID=1297267988', 
    category: 'electronics' 
  },
  { 
    textdeal:true, 
    store:'Letbricks', 
    img: '', 
    thumbnail: 'ebay/rescue-vehicle.webp', 
    bannerURL:'',
    title: 'Letbricks', 
    text: 'Road Rescue Vehicle', 
    link: 'https://www.shareasale.com/m-pr.cfm?merchantID=27731&userID=3838146&productID=1263015110', 
    category: 'electronics' 
  },
  { 
    textdeal:true, 
    store:'Padel Market', 
    img: '', 
    thumbnail: 'ebay/padelmarket.webp', 
    bannerURL:'',
    title: 'Padel Market', 
    text: '', 
    link: 'https://www.shareasale.com/r.cfm?b=1901759&u=3838146&m=118672', 
    category: 'electronics' 
  },
  { 
    textdeal:true, 
    store:'Escort Radar', 
    img: '', 
    thumbnail: 'ebay/escort-max.webp', 
    bannerURL:'',
    title: 'Escort Radar', 
    text: 'MAX 360c MKII', 
    link: 'https://www.shareasale.com/m-pr.cfm?merchantID=50974&userID=3838146&productID=1268710501', 
    category: 'electronics' 
  },
  { 
    textdeal:true, 
    store:'Hurley', 
    img: '', 
    thumbnail: 'ebay/hurley-bag.webp', 
    bannerURL:'',
    title: 'Hurley', 
    text: 'HURLEY PEAK BACKPACK', 
    link: 'https://www.jdoqocy.com/click-101000708-14104895?url=https%3A%2F%2Fwww.hurley.com%2Fproducts%2Fhurley-peak-backpack-9a7390-cilantro%3Fvariant%3D41496411209867&cjsku=9A7390-CILANTRO-ONESIZE', 
    category: '',
    price:'$44.00'
  },
  { 
    textdeal:true, 
    store:'iTouch', 
    img: '', 
    thumbnail: 'ebay/itouch-watch.webp', 
    bannerURL:'',
    title: 'iTouch', 
    text: 'ITOUCH AIR 3 SMARTWATCH', 
    link: 'https://shareasale.com/r.cfm?b=1814829&u=3838146&m=113101&urllink=itouchwearables%2Ecom%2Fproducts%2Fitouch%2Dair%2D3&afftrack=', 
    category: '',
    price:'$49.99'
  },
  { 
    textdeal:true, 
    store:'iTouch', 
    img: '', 
    thumbnail: 'ebay/X9PRO.webp', 
    bannerURL:'',
    title: 'iTouch', 
    text: 'Fanttik X9 Pro Portable Tire Inflator', 
    link: 'https://www.shareasale.com/m-pr.cfm?merchantID=119020&userID=3838146&productID=1350799708', 
    category: '',
    price:'$79.97'
  },

]

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }

  export default [...specialDeals, ...shuffle(ebayDeals) ] 
