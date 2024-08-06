import { getContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

export default function getHiglitedContentAsyncData(props) {
  const { data, id, dispatch } = props;

  const subrequestID = id;

  return [dispatch(getContent(flattenToAppURL(data.href), null, subrequestID))];
}
