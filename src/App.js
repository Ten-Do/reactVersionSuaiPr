import { RouterProvider } from 'react-router-dom';

import { router } from './router';

const App = () => (
<RouterProvider router={router} fallbackElement={<>сюда надо Loader воткнуть</>}></RouterProvider>
  );

export default App;