import {
  Form,
  FormLabel,
  FormPosition,
  FormInMail,
  FormButton,
  TelagramIcon,
} from "./Subscribe.styled";

const Subscribe = () => {
  return (
    <Form>
      <FormLabel>Подпишитесь на рассылку</FormLabel>
      <FormPosition>
        <FormInMail
          type="email"
          name="footer-email"
          id="footer-email"
          placeholder="E-mail"
        />
        <FormButton type="submit">
          Подписаться
          <TelagramIcon />
        </FormButton>
      </FormPosition>
    </Form>
  );
};
export default Subscribe;
