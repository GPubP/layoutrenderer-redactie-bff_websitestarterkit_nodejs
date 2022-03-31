import dynamic from 'next/dynamic';

const WIDGETS_LIST = ['AlertWidget', 'WrapperWidget'];

function loadDynamic(widgetName) {
  return dynamic(() => import('@layout-renderer/widgets').then((mod) => mod[widgetName]), { ssr: false });
}

export default WIDGETS_LIST.map((w) => ({ type: w, component: loadDynamic(w) }));
