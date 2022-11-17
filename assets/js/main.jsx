import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import axios from 'axios';
import Layout from '@/components/Layout';
import '../css/style.css';

const pages = import.meta.glob('./pages/**/*.jsx')

document.addEventListener('DOMContentLoaded', () => {

  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  axios.defaults.headers.common['X-CSRFToken'] = csrfToken;

  const appName = 'DjangoApp';

  InertiaProgress.init();

  createInertiaApp({
    title: (title) => `${title} | ${appName}`,
    resolve: async name => {
      const page = (await pages[`./pages/${name}.jsx`]()).default;
      page.layout = page.layout || Layout

      return page
    },
    setup({ el, App, props }) {
      createRoot(el).render(<App {...props} />)
    },
  })
});
