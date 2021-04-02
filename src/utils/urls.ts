import logo from "../logo.svg"

const isIPFS = (string: string) => string.length === 46 && string.indexOf("Qm") === 0


export const fromImageHashToUrl = (hash?: string) => {
  if(hash) {
    return isIPFS(hash) ? `https://gateway.pinata.cloud/ipfs/${hash}`: hash
  }
  return logo
}