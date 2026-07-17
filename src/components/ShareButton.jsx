import { WhatsappShareButton } from "react-share";

function ShareButton() {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://example.com";

  return (
    <div className="share-card">
      <WhatsappShareButton url={shareUrl} className="share-button">
        Share with your loved ones ❤️
      </WhatsappShareButton>
    </div>
  );
}

export default ShareButton;