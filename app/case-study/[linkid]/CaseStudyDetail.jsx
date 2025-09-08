import { Promo } from './components/Promo';
import { caseStudiesFullData } from "./CaseStudyDetailWrapper";
import { Introduction } from './components/Introduction';
import { Challenge } from './components/Challenge';
import { Solution } from './components/Solution';
import { Impact } from './components/Impact';

export default function CaseStudyDetail({ data }) {

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Promo data={data} />
      <Introduction data={data} />
      <Challenge data={data} />
      <Solution data={data} />
      <Impact data={data} />
    </div>
  );
}
