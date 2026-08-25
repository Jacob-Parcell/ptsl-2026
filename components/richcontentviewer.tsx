"use client";

import dynamic from "next/dynamic";
import "@wix/ricos/css/all-plugins-viewer.css";

const RicosViewerClient = dynamic(
  async () => {
    const { quickStartViewerPlugins, RicosViewer } = await import("@wix/ricos");
    const plugins = quickStartViewerPlugins();

    return function WixViewer({ content }: { content: any }) {
      return <RicosViewer content={content} plugins={plugins} />;
    };
  },
  {
    ssr: false,
    loading: () => (
      <div className="rich-content text-foreground">Loading content...</div>
    ),
  }
);

type RichContentViewerProps = {
  content: any;
};

const RichContentViewer: React.FC<RichContentViewerProps> = ({ content }) => {
  // Suppress the fetchpriority warning from Wix Ricos
  const originalConsoleError = console.error;
  console.error = (...args: any[]) => {
    if (args[0]?.toString().includes('fetchpriority')) {
      return;
    }
    originalConsoleError(...args);
  };

  return (
    <div className="rich-content text-foreground">
      <RicosViewerClient content={content} />
    </div>
  );
};

export default RichContentViewer;