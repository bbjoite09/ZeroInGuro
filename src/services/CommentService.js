import axios from 'axios';
import { axiosSrc } from '../static/url/axiosSrc';

class CommentService {
  async getComment(pagenumb, pagesize) {
    const data = await axios
      .get(axiosSrc.getComment, {
        params: {
          pagenumb,
          pagesize,
        },
      })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error;
      });
    return data;
  }

  async postComment(cmnttext, cmntpw) {
    const data = await axios
      .post(axiosSrc.postComment, {
        cmnttext,
        cmntpw,
      })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error;
      });
    return data;
  }

  async updateComment(cmntid, cmnttext, cmntdate) {
    const data = await axios
      .post(axiosSrc.updateComment, {
        cmntid,
        cmnttext,
        cmntdate,
      })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error;
      });
    return data;
  }

  async deleteComment(cmntid, cmntpw) {
    const data = await axios
      .post(axiosSrc.deleteComment, {
        operation: 'd',
        cmntid,
        cmntpw,
      })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        throw error;
      });
    return data;
  }
}
export default CommentService;
