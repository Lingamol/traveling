import { AddressTab, AddrList, AddrItem, AddrLink } from "./Address,styled";

const Address = () => {
  return (
    <div>
      <AddressTab>
        <AddrList>
          <AddrItem>
            <AddrLink href="index.html">
              г. Киев, пр-т Леси Украинки, 26
            </AddrLink>
          </AddrItem>
          <AddrItem>
            <AddrLink href="mailto:info@devstudio.com">
              info@devstudio.com
            </AddrLink>
          </AddrItem>
          <AddrItem>
            <AddrLink href="tel:+380961111111">+38 096 111 11 11</AddrLink>
          </AddrItem>
        </AddrList>
      </AddressTab>
    </div>
  );
};
export default Address;
