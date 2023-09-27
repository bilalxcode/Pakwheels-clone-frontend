import React from "react";

function GetPakwheels() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          background: "#F2F3F3",
          padding: "40px 40px",
          height: "50vh",
          marginTop: "10px",
        }}
      >
        <div class="container bg-wrapper">
          <div class="row">
            <div class="col-md-9">
              <div class="row d-flex align-center">
                <div class="col-md-8">
                  <h2
                    class="fs28 generic-blue mb5"
                    style={{ color: "#233D7B", fontWeight: "bold",fontSize:"35px" }}
                  >
                    Get The PakWheels App
                  </h2>
                  <p class="mt15 fs16 mb30 ">
                    Buy & Sell Cars, Bikes and Auto Parts faster and better{" "}
                    <br /> using our App
                  </p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.pakwheels&hl=en&gl=US&pli=1"
                    target="_blank"
                    title="PakWheels Android App"
                  >
                    <img
                    
                      alt="Google-play-badge"
                      height="40"
                      loading="lazy"
                      src="https://wsa4.pakwheels.com/assets/google-play-badge-f4bed6cbd8a3a1be7c79377c4441447a.svg"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/pk/app/pakwheels-buy-sell-cars/id739776365"
                    style={{ margin: "0px 3px" }}
                    target="_blank"
                    title="PakWheels iOS App"
                  >
                    <img
                      alt="App-store-badge"
                      height="40"
                      loading="lazy"
                      src="https://wsa1.pakwheels.com/assets/app-store-badge-4d05ff70e5546f31e3891739ea40abad.svg"
                    />
                  </a>
                  <a
                    href="https://appgallery.huawei.com/#/app/C101437147"
                    target="_blank"
                    title="PakWheels Android App"
                  >
                    <img
                      alt="Huawei-store-badge"
                      height="40"
                      loading="lazy"
                      src="https://wsa4.pakwheels.com/assets/huawei-store-badge-7ad06f9ffe74b644d49c6221af98f5b3.svg"
                    />
                  </a>
                </div>
                <div class="col-md-4 col-md-offset-1">
                  <div class="qr-code-cont">
                    <img
                      alt="Scanner_arrow"
                      class="qr-code-arrow"
                      src="https://wsa4.pakwheels.com/assets/promotion-app/scanner_arrow-e49b64a6868f7f501b191d7b984c4268.svg"
                    />
                    <img
                      alt="App-install-qr-code"
                      class="mr15"
                      src="https://wsa3.pakwheels.com/assets/promotion-app/app-install-qr-code-281c1dc2396c1735eadfe5f80c020673.svg"
                    />
                    <p class="mb0">
                      Scan the QR
                      <br /> to get the App
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetPakwheels;
