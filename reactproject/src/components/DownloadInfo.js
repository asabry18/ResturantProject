import PlayStore from "../assets/images/downloadInfo/play-store.png";
import AppleStore from "../assets/images/downloadInfo/apple.png";
import App1 from "../assets/images/downloadInfo/app-1.png";
import App2 from "../assets/images/downloadInfo/app-2.png";
export default function DownloadInfo() {
  return (
    <>
      <section className="DownloadInfo">
        <div className="downloadInfo">
          <div className="downloadTitle">
            <h3>
              Simple Way to Order <br />
              your food Faster
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              officiis esse atque amet ipsam possimus illum placeat sunt, quidem
              ipsa autem mollitia dolores temporibus deserunt quo recusandae
              nulla rem quia?
            </p>
            <div className="downloadLink">
              <div className="link">
                <a href="###">
                  <img src={PlayStore} alt="play store button" />
                </a>
                <a href="###">
                  <img src={AppleStore} alt="apple store button" />
                </a>
              </div>
            </div>
          </div>
          <div className="downloadImages">
            <div className="mobileScreenshots">
              <img src={App1} alt="mobile-screenshot" />
              <img src={App2} alt="mobile-screenshot" />
            </div>
          </div>
        </div>
      </section>

      <section className="deliverySection">
        <div className="deliveryInfoPhoto">
          <img src="/info-img-photos/infoSection.png" alt="Info Section" />
        </div>
        <div className="deliveryInfo">
          <h1>Fastest Food Delivery in City</h1>
          <p>
            {" "}
            Our visual designer lets you quickly and of drag a down your way to
            custom apps for both keep desktop.{" "}
          </p>
          <div className="deliveryOptions">
            <div className="option">
              <img src="/info-img-photos/icon (1).png" alt="photoIcon" />
              <p>Delivery within 30 minutes</p>
            </div>
            <div className="option">
              <img src="/info-img-photos/icon (2).png" alt="photoIcon" />
              <p>Best Offer & Prices </p>
            </div>
            <div className="option">
              <img src="/info-img-photos/icon.png" alt="photoIcon" />
              <p>Online Services Available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
