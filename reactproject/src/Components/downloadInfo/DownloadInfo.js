import '../downloadInfo/DownloadInfo.css'
const DownloadInfo = () => {
    return ( 
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
            ipsa autem mollitia dolores temporibus deserunt quo recusandae nulla
            rem quia?
          </p>
          <div className="downloadLink">
            <div className="link">
              <a href="###"><img src='/info-img-photos/play-store.png' alt="play store button"/></a>
              <a href="###"><img src='/info-img-photos/apple.png' alt="apple store button"/></a>
            </div>
          </div>
        </div>
        <div className="downloadImages">
          <div className="mobileScreenshots">
            <img src='/info-img-photos/app-1.png' alt="mobile-screenshot"/>
            <img src='/info-img-photos/app-2.png' alt="mobile-screenshot" />
          </div>
        </div>
      </div>
    </section>
     );
}
 
export default DownloadInfo;