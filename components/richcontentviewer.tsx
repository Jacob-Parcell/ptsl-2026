import { quickStartViewerPlugins, RicosViewer } from "@wix/ricos";
import "@wix/ricos/css/all-plugins-viewer.css";

const plugins = quickStartViewerPlugins();

type RichContentViewerProps = {
  content: any;
};

const RichContentViewer: React.FC<RichContentViewerProps> = ({ content }) => {
  return <RicosViewer content={content} plugins={plugins} />;
};
export default RichContentViewer;
