import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionNavigations1 from '../components/navigations/IndexSectionNavigations1';
import IndexSectionHeaders2 from '../components/headers/IndexSectionHeaders2';
import IndexSectionFeatures4 from '../components/features/IndexSectionFeatures4';
import IndexSectionFeatures3 from '../components/features/IndexSectionFeatures3';
import IndexSectionFeatures7 from '../components/features/IndexSectionFeatures7';
import IndexSectionTestimonials5 from '../components/testimonials/IndexSectionTestimonials5';
import IndexSectionInstagramPhotos11 from '../components/instagram-photos/IndexSectionInstagramPhotos11';
import IndexSectionStats12 from '../components/stats/IndexSectionStats12';
import IndexSectionTeam6 from '../components/team/IndexSectionTeam6';
import IndexSectionFaq10 from '../components/faq/IndexSectionFaq10';
import IndexSectionCallToAction9 from '../components/call-to-action/IndexSectionCallToAction9';
import IndexSectionFooters8 from '../components/footers/IndexSectionFooters8';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionNavigations1 />
      <IndexSectionHeaders2 />
      <IndexSectionFeatures4 />
      <IndexSectionFeatures3 />
      <IndexSectionFeatures7 />
      <IndexSectionTestimonials5 />
      <IndexSectionInstagramPhotos11 />
      <IndexSectionStats12 />
      <IndexSectionTeam6 />
      <IndexSectionFaq10 />
      <IndexSectionCallToAction9 />
      <IndexSectionFooters8 />
    </React.Fragment>
  );
}

