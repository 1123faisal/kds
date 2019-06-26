
$('.show').avgrund({
	   
      height: 900,
      holderClass: 'custom',
      showClose: true,
      showCloseText: 'X',
      onBlurContainer: '.container-scroller',
	  template : '<div class="table-responsive">'+
'	 <div class="d-flex flex-wrap mb-5">'+
'                        <div class="mr-5 mt-3">'+
'                         <p class="text-muted">KOT ID</p>'+
'                           <h3>1</h3>'+
'                             </div>'+
'                            <div class="mr-5 mt-3">'+
'                           <p class="text-muted">Comp. Time</p>'+
'                         <h3>10:15</h3>'+
'                         </div>'+
'                          <div class="mr-5 mt-3">'+
'                            <p class="text-muted">Delay</p>'+
'                              <h3>0:25</h3>'+
'                           </div>'+
'                         <div class="mt-3">'+
'                         <p class="text-muted">Item Name</p>'+
'                           <h3>Veg Manchurian</h3>'+
'                             </div>'+
'                              <div class="mt-3">'+
'                           <p class="text-muted">Qty</p>'+
'                         <h3>2</h3>'+
'                          '+
'                       </div>'+
'                     </div>'+
'                   <table class="table table-striped">'+
'                     <thead>'+
'                       <tr>'+
'                          <th>'+
'                           Item'+
'                         </th>'+
'                         <th>'+
'                           Quantity'+
'                         </th>'+
'                         <th>'+
'                           Time'+
'                         </th>'+
'                         <th>'+
'                           Run. Time'+
'                         </th>'+
'                         <th>'+
'                           Status'+
'                         </th>'+
 
'                       </tr>'+
'                     </thead>'+
'                     <tbody>'+
'                       <tr>'+
'                         '+
'                         <td>'+
'                           Kadai Paneer'+
'                         </td>'+
'                         <td>'+
'                           5'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM</td>'+
'                         <td>'+
'                           <span class="remain"> 0:22</span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-primary"> Mark  Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+
'                         '+
'                         <td>'+
'                           Veg Biryani'+
'                         </td>'+
'                         <td>'+
'                           11'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
'                           <span class="remain"> 0:22</span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-dark min-width"> Not Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+
'                         '+
'                         <td>'+
'                           Mix-Veg '+
'                         </td>'+
'                         <td>'+
'                           6'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
''+
'                           <span class="remain"> 0:22</span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-primary"> Mark   Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+ 
'                         '+
'                         </td>'+
'                         <td>Paneer Masala</td>'+
'                         <td>'+
'                           5'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
'                           <span class="remain"> 0:22</span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-dark min-width"> Not Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+ 
'                        '+
'                         </td>'+
'                         <td>'+
'                           Chili paneer</td>'+
'                         <td>'+
'                           3'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
'                           <span class="remain"> 0:22</span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-primary"> Mark   Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+ 
'                '+
''+
'               '+
'                         </td>'+
'                         <td>'+
'                           Veg kothe</td>'+
'                         <td>'+
'                           7'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
'                         <span class="remain"> 0:22</span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-dark min-width"> Not Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+ 
'                           '+
'                                                        </td>'+
'                         <td>Veg Manchurian</td>'+
'                         <td>'+
'                           4'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
'                           <span class="remain"> 0:22</span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-primary"> Mark   Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                     </tbody>'+
'                   </table>'+
'                 </div>'
		});



$('.completed').avgrund({
	   
      height: 900,
      holderClass: 'custom',
      showClose: true,
      showCloseText: 'X',
      onBlurContainer: '.container-scroller',
	  template : '<div class="table-responsive">'+
'	  <div class="mt-2 mb-2 py-2 border-top border-bottom">'+
'                       <ul class="nav profile-navbar">'+
'                         <li class="nav-item">'+
'                           <a class="nav-link active" href="#">'+
'                             <i class="ti-user"></i>'+
'                             Waiter Name :<span> Kamlesh</span>'+
'                           </a>'+
'                         </li>'+
'                         <li class="nav-item">'+
'                           <a class="nav-link active" href="#">'+
'                             <i class="ti-layout-tab"></i>'+
'                              Table : <span> T1</span> '+
'                           </a>'+
'                         </li>'+
'                         <li class="nav-item">'+
'                           <a class="nav-link active" href="#">'+
'                             <i class="ti-receipt"></i>'+
'                              KOT : <span>#1</span>'+
'                           </a>'+
'                         </li>'+
'                          '+
'                       </ul>'+
'                     </div>'+
'                   <table class="table table-striped">'+
'                     <thead>'+
'                       <tr>'+
'                          <th>'+
'                           Item'+
'                         </th>'+
'                         <th>'+
'                           Quantity'+
'                         </th>'+
'                         <th>'+
'                           CMP. Time'+
'                         </th>'+
'                         <th>'+
'                           Run. Time'+
'                         </th>'+
'                         <th>'+
'                           Status'+
'                         </th>'+
 
'                       </tr>'+
'                     </thead>'+
'                     <tbody>'+
'                       <tr>'+
'                         '+
'                         <td>'+
'                           Kadai Paneer'+
'                         </td>'+
'                         <td>'+
'                           5'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM</td>'+
'                         <td>'+
'                           <span class="remain"> - </span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-primary"> Mark  Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+
'                         '+
'                         <td>'+
'                           Veg Biryani'+
'                         </td>'+
'                         <td>'+
'                           11'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
'                           <span class="remain"> 0:22</span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-dark min-width"> Not Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+
'                         '+
'                         <td>'+
'                           Mix-Veg '+
'                         </td>'+
'                         <td>'+
'                           6'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
''+
'                           <span class="remain"> - </span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-primary"> Mark   Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+ 
'                         '+
'                         </td>'+
'                         <td>Paneer Masala</td>'+
'                         <td>'+
'                           5'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
'                           <span class="remain"> 0:22</span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-dark min-width"> Not Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+ 
'                        '+
'                         </td>'+
'                         <td>'+
'                           Chili paneer</td>'+
'                         <td>'+
'                           3'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
'                           <span class="remain"> - </span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-primary"> Mark   Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+ 
'                '+
''+
'               '+
'                         </td>'+
'                         <td>'+
'                           Veg kothe</td>'+
'                         <td>'+
'                           7'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
'                         <span class="remain"> 0:22</span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-dark min-width"> Not Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                       <tr>'+ 
'                           '+
'                                                        </td>'+
'                         <td>Veg Manchurian</td>'+
'                         <td>'+
'                           4'+
'                         </td>'+
'                         <td>'+
'                            1:55 AM'+
'                         </td>'+
'                         <td>'+
'                           <span class="remain"> - </span>'+
'                         </td>'+
'                         <td>'+
'                           <button type="button" class="btn btn-primary"> Mark   Ready </button>'+
'                         </td>'+
 
'                       </tr>'+
'                     </tbody>'+
'                   </table>'+
'                 </div>'
		});




$('.kot').avgrund({
	   
      height: 900,
      holderClass: 'custom',
      showClose: true,
      showCloseText: 'X',
      onBlurContainer: '.container-scroller',
	  template :'<div class="table-responsive">'+ '<ul class="icon-data-list">'+
'                    <li>'+
'                    <div class="main-page-min-height">'+
'            <div class="pot-head-width kot-bill-width text-left"> '+
'              <p class="description-new larger list-detail-css min-320 pad-8"> <span> KOT ID<span class="other-list-head text-dark-grey ng-binding">1</span> </span></p>'+
'            </div> '+
'            <div class="pot-head-width kot-bill-width text-left">'+
'              <p class="description-new larger list-detail-css min-320 pad-8"> Comp. Time <span class="other-list-head text-dark-grey ng-binding">10:00 </span></p>'+
'          </div>'+
'            <div class="pot-head-width kot-bill-width text-left">'+
'              <p class="description-new larger list-detail-css min-320 pad-8"> Delay Time <span class="other-list-head text-dark-grey ng-binding">00:10</span></p>'+
'            </div>'+
'            <div class="pot-head-width  kot-bill-item-width text-left">'+
'              <p class="description-new larger list-detail-css min-320 pad-8">Item Nmane <span class="other-list-head text-dark-grey ng-binding">    Paneer Masala</span></p>'+
'            </div><div class="pot-head-width text-left kot-bill-width">'+
'              <p class="description-new larger list-detail-css min-320 pad-8">Qty.<span class="other-list-head text-dark-grey ng-binding">   10</span></p>'+
'            </div>  '+
'          </div></li>'+
'          <li>'+
'                    <div class="main-page-min-height">'+
'            <div class="pot-head-width kot-bill-width text-left"> '+
'              <p class="description-new larger list-detail-css min-320 pad-8"> <span> KOT ID<span class="other-list-head text-dark-grey ng-binding">2</span> </span></p>'+
'            </div> '+
'            <div class="pot-head-width kot-bill-width text-left">'+
'              <p class="description-new larger list-detail-css min-320 pad-8"> Comp. Time <span class="other-list-head text-dark-grey ng-binding">12:00</span></p>'+
'            </div>'+
'            <div class="pot-head-width kot-bill-width text-left">'+
'              <p class="description-new larger list-detail-css min-320 pad-8"> Delay Time <span class="other-list-head text-dark-grey ng-binding">01:00</span></p>'+
'            </div>'+
'            <div class="pot-head-width  kot-bill-item-width text-left">'+
'              <p class="description-new larger list-detail-css min-320 pad-8">Item Nmane <span class="other-list-head text-dark-grey ng-binding">    Chili paneer</span></p>'+
'            </div><div class="pot-head-width text-left kot-bill-width">'+
'              <p class="description-new larger list-detail-css min-320 pad-8">Qty<span class="other-list-head text-dark-grey ng-binding">   15</span></p>'+
'            </div>  '+
'          </div></li>'+
'           '+
'           '+
'          </ul>'+ 
'                 </div>'
		});