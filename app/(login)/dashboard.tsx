import { memo } from 'react';
import {
  Background,
  Logo,
  Header,
  Paragraph,
  Button,
  Link,
} from '../../components';

const Dashboard = () => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Link href="/greeting" asChild>
      <Button>Logout</Button>
    </Link>
  </Background>
);

export default memo(Dashboard);
