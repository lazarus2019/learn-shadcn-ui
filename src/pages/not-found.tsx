import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      NotFoundPage
      <Link to="/">
        <Button>Back to Homepage</Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
