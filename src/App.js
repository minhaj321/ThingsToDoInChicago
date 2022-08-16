import './App.css';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Notification from './Pages/Notification/Notification';
import FeedbackComplaint from './Pages/FeedbackComplaint/FeedbackComplaint';
import EventBusiness from './Pages/EventBusiness/EventBusiness.js';
import TableView from './Pages/TableView/TableView.js';
import Login from './Pages/Login/Login.js';
import LiveChicago from './Pages/LiveChicago/LiveChicago.js';
import Kids from './Pages/Kids/Kids.js';
import Accessiblility from './Pages/Accessiblility/Accessiblility.js';
import SelectTIcketModal from './Components/SelectTIcketModal/SelectTIcketModal.js';
import EventDetails from './Components/EventDetails/EventDetails.js';
import Suburbs from './Pages/Suburbs/Suburbs.js';
import FindRestaurants from './Pages/FindRestaurants/FindRestaurants.js';
import { Routes, Route, Link } from "react-router-dom";
import Guide from './Pages/Guide/Guide.js';
import Festivals from './Pages/Festivals/Festivals.js';
import WorkingWithUs from './Pages/WorkingWithUs/WorkingWithUs.js';
import Shopping from './Pages/Shopping/Shopping.js';
import FindRestaurant from './Pages/FindRestaurant/FindRestaurant.js';
import Conventions from './Pages/Conventions/Conventions.js';
import PaymentPage from './Pages/PaymentPage/PaymentPage.js';

function App() {

  return (
    <div className="App">
      <Routes>
      
        <Route path="/" element={<Home />} />  
        <Route path="Profile" element={<Profile />} />
        <Route path="Notification" element={<Notification />} />
        <Route path="EventBusiness" element={<EventBusiness />} />
        <Route path="FeedbackComplaint" element={<FeedbackComplaint />} />
        <Route path="Login" element={<Login />} />
        <Route path="TableView" element={<TableView />} />
        <Route path="PaymentPage" element={<PaymentPage />} />


        <Route path='shopping' element={<Shopping/>}/>
        <Route path="LiveChicago" element={<LiveChicago />} />
        <Route path="Kids" element={<Kids />} />
        <Route path="Suburbs" element={<Suburbs />} />
        <Route path="Accessiblility" element={<Accessiblility />} />
        <Route path='guide' element={<Guide/>}/>
        <Route path='working-with-us' element={<WorkingWithUs/>}/>
        
  
        <Route path='Conventions' element={<Conventions/>}/>
        <Route path='festivals' element={<Festivals/>}/>
        <Route path='find' element={<FindRestaurant/>}/>
        <Route path="FindRestaurants" element={<FindRestaurants />} />
        <Route path="EventDetails" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;


// EF6F6F PINK SLIDER 60% OPACITY
// 000000 BLACK
// 333333 SECOND BLACK
// 3EB2E2 BLUE-ISH
// F8FAFF BG FOOTER


// done
// 3PX OF YOUR INSIDER'S GUIDE (THICKNESS  => 3PX )
// FOOTER ICON SIZE  ==> 386 X 138
// FOOTER SUPPORT 24 , 20 , FOLLOW US = 24
// FONT SIZE =IMAGE 18 
// PLAN YOUR TRIP ==> 24, DOWNLOAD 14 
// MAIN BODY ==> EXPLORE YOUR CITY => 48 AND 14 = = > 14
// ACCESSIBILITY ==>  22 , 18
// CARD ==>NUMBER 18 , HEADING 16 , OFF 16
// TOP PICKS 34 , SHOW ALL 18
// FOOD AND DRINK 14
// 3FB3E4 PREV AND NEXT (UNDERLINE,BREADCRUM)
// F2F6FF BG OF RHUM (FEATURED IN)
// MINORITY DAEEF7
// 14 PARIS RESTARUANT FONT SIZE = >30  , 16(DINE-INE)(LOCA,CONTA) ,14(WOMEN)(DESC) , 18 , 12(VIEW MORE),HEADING 24
// 12 GROUP AMANITIES - 2.5 STARS 
//FEATURED IN 26 
// VIEW ALL REST 12
// VIEW MY CAL = 14
// TXT SIZE 18 => FEATURED IN 
// IMAGE SIZE = >  311 X 304
// IMAGE SIZE 386 X 298 , 191 X 147 
// KIDS ==> 52
// DISCOVER CHICAGO ==> 26
// 11 UNDERLINE
// 10 HEADING , 12 (14 PARIS) , [1644E] 10 , DINE-IN 10 , WOMEN 10 

// points
//  17 , 18 


// undone







// second one
// card iamges 
// image sizes of top picks 285 x 226
// card tags sizes = > 104 x 21(-90 deg )

// image size => 265 x 262 height
// slider size ==> 270x298 height


// festival page
// the best font size: 36
//  para ==> 16 , 
//  sub heading 24

// save 26
// btn font 14 

// adver
// head 20 , blue see magic 14 , english 12 , btn 12 , rect size 732 x 152  

// chi town  = 30 , $33 36 , desc = 26 , txt 16
// parking 793 x 1040
// spacing 5
// find rest in chicago slider 274 x 298
// 4 images 271 x 270