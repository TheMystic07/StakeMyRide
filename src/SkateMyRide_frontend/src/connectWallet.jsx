// utils/walletUtils.js
export const connectWallet = async () => {
    if (window.ic.plug && window.ic.plug.isConnected) {
      const response = await window.ic.plug.requestConnect({
        host: "https://mainnet-api.internetcomputer.org",
      });
      return response.accounts[0];
    } else {
      console.log('Please install the Plug wallet browser extension!');
      return null;
    }
  };
  