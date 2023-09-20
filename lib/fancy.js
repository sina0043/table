document.querySelector('.fancy-table button').addEventListener('click',(e)=>{
  e.preventDefault()
  new Fancybox([
      { 
        src: 
        `
          <section class="simple-table">
            <div class="bg-dark text-white text-center">
              <h3 class="text-white py-3">Promotion Plans</h3>
              <table>
                <colgroup>
                  <col width="29.5%">
                  <col width="23%">
                  <col width="25%">
                  <col width="22.5%">
                </colgroup>
                <thead>
                  <tr>
                    <th class="bg-success">Compare all plans</th>
                    <th class="bg-warning">Starter</th>
                    <th class="bg-danger">Advance</th>
                    <th class="bg-info">Enterprise</th>
                  </tr>
                </thead>
                <tbody style="background-color: #51415f">
                  <tr>
                    <td class="text-left pl-2">1st Month Management Cost</td>
                    <td>$ 400</td>
                    <td>$ 900</td>
                    <td>$ 1200</td>
                  </tr>
                  <tr>
                    <td class="text-left pl-2">Following Month</td>
                    <td class="text-warning">$ 300</td>
                    <td class="text-danger">$ 700</td>
                    <td class="text-info">$ 900</td>
                  </tr>
                  <tr>
                    <td class="text-left pl-2">Delivery Time frame</td>
                    <td>3-6 Months</td>
                    <td>3-6 Months</td>
                    <td>3-6 Months</td>
                  </tr>
                  <tr>
                    <td class="text-left pl-2">Support 24/7</td>
                    <td>-</td>
                    <td class="text-danger"><i class="fa-solid fa-check"></i></td>                  
                    <td class="text-info"><i class="fa-solid fa-check"></i></td>             
                  </tr>
                  <tr>
                    <td class="text-left pl-2">Certificate</td>
                    <td>-</td>
                    <td class="text-danger"><i class="fa-solid fa-check"></i></td>       
                    <td class="text-info"><i class="fa-solid fa-check"></i></td>   
                  </tr>
                  <tr>
                    <td></td>
                    <td><a href="#" class="btn" style="background-color: #35ff25"> buy <span class="d-none d-md-inline-block">now</span></a></td>
                    <td><a href="#" class="btn" style="background-color: #35ff25"> buy <span class="d-none d-md-inline-block">now</span></a></td>
                    <td><a href="#" class="btn" style="background-color: #35ff25"> buy <span class="d-none d-md-inline-block">now</span></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section> 
        `
        , 
        type: "html",
        thumb: "./img/one.png",
      },
      { 
        src: 
        `
          <section class="simple-table">
            <div class="bg-dark text-white text-center">
              <h3 class="text-white py-3">Promotion Plans</h3>
              <table>
                <colgroup>
                  <col width="29.5%">
                  <col width="23%">
                  <col width="25%">
                  <col width="22.5%">
                </colgroup>
                <thead>
                  <tr>
                    <th class="bg-success">Compare all plans</th>
                    <th class="bg-warning">Starter</th>
                    <th class="bg-danger">Advance</th>
                    <th class="bg-info">Enterprise</th>
                  </tr>
                </thead>
                <tbody style="background-color: #009688">
                  <tr>
                    <td class="text-left pl-2">1st Month Management Cost</td>
                    <td>$ 400</td>
                    <td>$ 900</td>
                    <td>$ 1200</td>
                  </tr>
                  <tr>
                    <td class="text-left pl-2">Following Month</td>
                    <td class="text-warning">$ 300</td>
                    <td class="text-danger">$ 700</td>
                    <td class="text-info">$ 900</td>
                  </tr>
                  <tr>
                    <td class="text-left pl-2">Delivery Time frame</td>
                    <td>3-6 Months</td>
                    <td>3-6 Months</td>
                    <td>3-6 Months</td>
                  </tr>
                  <tr>
                    <td class="text-left pl-2">Support 24/7</td>
                    <td>-</td>
                    <td class="text-danger"><i class="fa-solid fa-check"></i></td>                  
                    <td class="text-info"><i class="fa-solid fa-check"></i></td>             
                  </tr>
                  <tr>
                    <td class="text-left pl-2">Certificate</td>
                    <td>-</td>
                    <td class="text-danger"><i class="fa-solid fa-check"></i></td>       
                    <td class="text-info"><i class="fa-solid fa-check"></i></td>   
                  </tr>
                  <tr>
                    <td></td>
                    <td><a href="#" class="btn" style="background-color: #FFEB3B"> buy <span class="d-none d-md-inline-block">now</span></a></td>
                    <td><a href="#" class="btn" style="background-color: #FFEB3B"> buy <span class="d-none d-md-inline-block">now</span></a></td>
                    <td><a href="#" class="btn" style="background-color: #FFEB3B"> buy <span class="d-none d-md-inline-block">now</span></a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section> 
        `
        , 
        type: "html",
        thumb: "./img/two.png",
      },
      { 
          src: 
          `
            <section class="simple-table">
              <div class="bg-dark text-white text-center">
                <h3 class="text-white py-3">Promotion Plans</h3>
                <table>
                  <colgroup>
                    <col width="29.5%">
                    <col width="23%">
                    <col width="25%">
                    <col width="22.5%">
                  </colgroup>
                  <thead>
                    <tr>
                      <th class="bg-success">Compare all plans</th>
                      <th class="bg-warning">Starter</th>
                      <th class="bg-danger">Advance</th>
                      <th class="bg-info">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody style="background-color: #8181813d">
                    <tr>
                      <td class="text-left pl-2">1st Month Management Cost</td>
                      <td>$ 400</td>
                      <td>$ 900</td>
                      <td>$ 1200</td>
                    </tr>
                    <tr>
                      <td class="text-left pl-2">Following Month</td>
                      <td class="text-warning">$ 300</td>
                      <td class="text-danger">$ 700</td>
                      <td class="text-info">$ 900</td>
                    </tr>
                    <tr>
                      <td class="text-left pl-2">Delivery Time frame</td>
                      <td>3-6 Months</td>
                      <td>3-6 Months</td>
                      <td>3-6 Months</td>
                    </tr>
                    <tr>
                      <td class="text-left pl-2">Support 24/7</td>
                      <td>-</td>
                      <td class="text-danger"><i class="fa-solid fa-check"></i></td>                  
                      <td class="text-info"><i class="fa-solid fa-check"></i></td>             
                    </tr>
                    <tr>
                      <td class="text-left pl-2">Certificate</td>
                      <td>-</td>
                      <td class="text-danger"><i class="fa-solid fa-check"></i></td>       
                      <td class="text-info"><i class="fa-solid fa-check"></i></td>   
                    </tr>
                    <tr>
                      <td></td>
                      <td><a href="#" class="btn" style="background-color: #FF9800"> buy <span class="d-none d-md-inline-block">now</span></a></td>
                      <td><a href="#" class="btn" style="background-color: #FF9800"> buy <span class="d-none d-md-inline-block">now</span></a></td>
                      <td><a href="#" class="btn" style="background-color: #FF9800"> buy <span class="d-none d-md-inline-block">now</span></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section> 
          `
          , 
          type: "html",
          thumb: "./img/three.png",
    }],
    {
        parentEl: document.querySelector('.fancy-table'),
        backdropClick: false,
        compact: true,
        hideScrollbar: false,
    },
  );
})