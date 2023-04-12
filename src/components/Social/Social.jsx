import {
  SocialTab,
  SocialTitle,
  SociaList,
  SocialItem,
  SocialLink,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "./Social.styled";

const Social = () => {
  return (
    <>
      <SocialTab>
        <SocialTitle>присоединяйтесь</SocialTitle>
        <SociaList>
          <SocialItem>
            <SocialLink href="" className="instagram">
              <InstagramIcon />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="" className="twitter">
              <TwitterIcon />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="" className="facebook">
              <FacebookIcon />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href="" className="linkedin">
              <LinkedinIcon />
            </SocialLink>
          </SocialItem>
        </SociaList>
      </SocialTab>
    </>
  );
};
export default Social;
