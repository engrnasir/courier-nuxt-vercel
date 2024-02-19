const LOGOS = [
    
    { img:'ebay.webp', title:'Ebay', cashback:0, link:'https://ebay.us/DorITE' },
    { img:'aliexpress.webp', title:'AliExpress', link:'https://click.linksynergy.com/fs-bin/click?id=w9ReUHPPo8U&offerid=1411045.3&bids=1411045.3&subid=0&type=4&LSNSUBSITE=LSNSUBSITE' },
    // { img:'', title:'MiniInTheBox', imgURL:'https://1000logos.net/wp-content/uploads/2021/05/Mini-In-The-Box-logo.png', link:'https://miniinthebox.8zwg.net/jraLB0' },
    { img:'amazfit.webp', title:'Amazfit', link:'https://www.dpbolvw.net/click-101000708-15260968' }, 
    { img:'Mango.webp', title:'Mango', link:'https://www.jdoqocy.com/click-101000708-12342697' },
    { img:'Anker.webp', title:'Anker', link:'http://anker.pxf.io/MmE1AY' }, 
    { img:'BAP.webp', title:'BuyAutoParts', link:'https://www.jdoqocy.com/click-101000708-11468617' }, 
    { img:'baseus.webp', title:'Baseus', link:'https://shareasale.com/r.cfm?b=2203577&u=3838146&m=133921&urllink=&afftrack=' }, 
    { img:'shark.webp', title:'Shark', link:'https://sharkclean.sjv.io/oqJdGE', noColombia:true }, 
    
    { img:'eufy.webp', title:'EUFY', link:'https://eufy-us.sjv.io/c/4666008/999452/13094' },
    { img:'KICKSCREW.webp', title:'Kicks Crew', link:'https://kickscrew.sjv.io/oqJ9Bm' },
    { img:'letbricks.webp', title:'Letbricks', link:'https://shareasale.com/r.cfm?b=236267&u=3838146&m=27731&urllink=www%2Eletbricks%2Ecom%2Fproduct%2Dcategory%2Fbest%2Dseller%2F%3Fsscid%3Dc1k7%5F48mb9&afftrack=' }, 
    { img:'lightInTheBox.webp', title:'LightInTheBox', link:'https://lightinthebox.tv2h87.net/m5kajO' }, 
    { img:'ador.webp', title:'Ador', link:'https://ador.sjv.io/LXY5O0' }, 
    { img:'sonos.webp', title:'Sonos', link:'https://www.jdoqocy.com/click-101000708-10777955' }, 
    { img:'ugreen.webp', title:'uGreen', link:'https://ugreencom.pxf.io/eKxnAO' }, 
    { img:'hp.webp', title:'A-Premium AutoParts', premium:true, link:'https://apremium.sjv.io/QyxG46' }, 
    { img:'ninja.webp', title:'Ninja', link:'https://ninjakitchen.pxf.io/XY5L0b' , noColombia:true }, 
    { img:'Jabra.webp', title:'JABRA', link:'https://www.jdoqocy.com/click-101000708-13680417' }, 
    { img:'GregNorman.webp', title:'Greg Norman Collection', link:'https://click.linksynergy.com/fs-bin/click?id=w9ReUHPPo8U&offerid=1396133.2&bids=1396133.2&type=3&subid=0' },

    { img:'Leica.webp', title:'Leica', link:'https://shareasale.com/r.cfm?b=2105846&u=3838146&m=128955&urllink=&afftrack=' }, 
    { img:'bebe.webp', title:'Bebe', link:'https://www.tkqlhce.com/click-101000708-15073299' }, 
    { img:'13deals.webp', title:'13 deals', link:'https://shareasale.com/r.cfm?b=272717&u=3838146&m=30503&urllink=www%2E13deals%2Ecom%2Fstore%2F&afftrack=' }, 
    { img:'itouch.webp', title:'iTouch', link:'https://shareasale.com/r.cfm?b=1814829&u=3838146&m=113101&urllink=&afftrack=' }, 
    { img:'techforless.webp', title:'TechForLess', link:'https://www.dpbolvw.net/click-101000708-10901193' }, 
    { img:'ecosmetics.webp', title:'ecosmetics', link:'https://www.dpbolvw.net/click-101000708-14080031' }, 

    { img:'Hurley.webp', title:'Hurley', link:'https://www.jdoqocy.com/click-101000708-15195957' }, 
    { img:'targus.webp', title:'Targus', link:'https://www.tkqlhce.com/click-101000708-15157849' }, 
    { img:'segway.webp', title:'Segway', link:'https://www.jdoqocy.com/click-101000708-15277351' }, 
    { img:'TPLINK.webp', title:'TPLINK', link:'https://www.dpbolvw.net/click-101000708-15610800' },
    { img:'andaSeat.webp', title:'Andaseat', link:'https://click.linksynergy.com/fs-bin/click?id=w9ReUHPPo8U&offerid=1355950.2&bids=1355950.2&type=3&subid=0' },
    { img:'NaturalTransformer.webp', title:'The Natural Transformer', link:'https://click.linksynergy.com/fs-bin/click?id=w9ReUHPPo8U&offerid=1392883.4&bids=1392883.4&type=3&subid=0' }, 
    { img:'Drop.webp', title:'Drop', link:'https://click.linksynergy.com/fs-bin/click?id=w9ReUHPPo8U&offerid=1325730.2&bids=1325730.2&type=3&subid=0' }, 
    { img:'hawalili.webp', title:'Hawalili', link:'https://www.shareasale.com/r.cfm?b=1794712&u=3838146&m=111906' }, 
    { img:'dvu.webp', title:'DYU Smart Bike', link:'https://www.tkqlhce.com/click-101000708-15580114' }, 
    { img:'samsung.webp', title:'Samsung', link:'https://click.linksynergy.com/fs-bin/click?id=w9ReUHPPo8U&offerid=1169279.13&bids=1169279.13&type=3&subid=0' }, 
    { img:'dell.webp', title:'Dell Outlet', link:'https://www.kqzyfj.com/click-101000708-12923554' }, 
    { img:'VEVOR.webp', title:'Vevor', link:'https://www.shareasale.com/r.cfm?b=1508656&u=3838146&m=95592' }, 
    { img:'worldwide.webp', title:'WorldWide Golf Shops', link:'https://www.dpbolvw.net/click-101000708-11166952' }, 
    { img:'biotrust.webp', title:'BioTrust', link:'https://www.kqzyfj.com/click-101000708-15635196' }, 
    { img:'vantrue.webp', title:'vantrue', link:'https://shareasale.com/r.cfm?b=1725609&u=3838146&m=107530&urllink=www%2Evantrue%2Ecom&afftrack=' }, 
    

    { img:'diggs.webp', title:'Diggs Updated Icon Logo', link:'https://www.dpbolvw.net/click-101000708-15264925' }, 
    { img:'priority-tire.webp', title:'Priority Tire', link:'https://www.jdoqocy.com/click-101000708-13394429' }, 

    { img:'adorama.webp', title:'Adorama', link:'https://adorama.rfvk.net/ZQeeZW' }, 
    { img:'temu.webp', title:'Temu', link:'http://temuaffiliateprogram.pxf.io/KjYLdv' }, 

] 

const priority = [
    
    { key:"Ebay" },
    { key:"AliExpress" },
    { key:"Amazfit" },
    { key:"Mango" },
    { key:"Shark" },
    { key:"BuyAutoParts" },
    { key:"Baseus" },

    { key:"Adorama" },
    { key:"Temu" },
    { key:"EUFY" },
    { key:"Kicks Crew" },
    { key:"Letbricks" },
    { key:"LightInTheBox" },
    { key:"Ador" },

    { key:"Sonos" },
    { key:"uGreen" },
    { key:"A-Premium AutoParts" },
    { key:"Ninja" },
    { key:"JABRA" },
    { key:"Anker" },
    { key:"Greg Norman Collection" },

    { key:"iTouch" },
    { key:"Leica" },
    { key:"Bebe" },
    { key:"13 deals" },
    // { key:"TechForLess" },
    // { key:"ecosmetics" },

    { key:"Hurley" },
    { key:"Targus" },
    // { key:"Segway" },
    { key:"TPLINK" },
    // { key:"Andaseat" },
    // { key:"The Natural Transformer" },
    // { key:"Drop" },

    // { key:"Hawalili" },
    // { key:"DYU Smart Bike" },
    { key:"Samsung" },
    { key:"Dell Outlet" },
    // { key:"Vevor" },
    // { key:"WorldWide Golf Shops" },
    // { key:"BioTrust" },

    // { key:"vantrue" },
    // { key:"Diggs Updated Icon Logo" },
    // { key:"Priority Tire" },
    
]

function sortedLogos(){
    const result = []
    priority.forEach(el => {
       result.push(LOGOS.find(item=> el.key === item.title))
    })
    return result
}

export default sortedLogos();
