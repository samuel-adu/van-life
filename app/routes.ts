import {
  type RouteConfig,
  index,
  route,
  layout,
} from '@react-router/dev/routes';

export default [
  layout('./components/Layout.tsx', [
    index('./routes/Home.tsx'),
    route('about', './routes/About.tsx'),
    route('vans', './routes/vans/Vans.tsx'),
    route('vans/:id', './routes/vans/VanDetail.tsx'),
    route('host', './components/HostLayout.tsx', [
      index('./routes/host/Dashboard.tsx'),
      route('income', './routes/host/Income.tsx'),
      route('vans', './routes/host/HostVans.tsx'),
      route('vans/:id', './routes/host/HostVanDetails.tsx', [
        index('./routes/host/HostVanInfo.tsx'),
        route('photos', './routes/host/HostVanPhotos.tsx'),
        route('pricing', './routes/host/HostVanPricing.tsx'),
      ]),
      route('reviews', './routes/host/Reviews.tsx'),
    ]),
  ]),
] satisfies RouteConfig;
