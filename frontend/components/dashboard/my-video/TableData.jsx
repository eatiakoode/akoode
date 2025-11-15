"use client";

import { getVideoTableData, deleteVideoAPI } from "../../../api/video";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import resolveImageUrl from "@/utils/resolveImageUrl";

const TableData = () => {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchVideoData = async () => {
    try {
      setLoading(true);
      const data = await getVideoTableData();
      setVideoList(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching videos:", error);
      toast.error("Failed to fetch videos");
      setVideoList([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteVideo = async (id, e) => {
    e?.preventDefault();
    const isConfirmed = window.confirm("Are you sure you want to delete this Video?");
    if (!isConfirmed) return;

    try {
      const data = await deleteVideoAPI(id);
      if (data.status === 'success') {
        toast.success(data.message || 'Video deleted successfully');
        setVideoList((prevVideoList) =>
          prevVideoList.filter((video) => video._id !== id)
        );
      } else {
        toast.error(data.message || 'Failed to delete video');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete Video');
      console.error("Delete error:", error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  let theadContent = [
    "Video Title",
    "Thumbnail",
    "Date Published",
    "Status",
    "Action",
  ];

  let tbodyContent = videoList && videoList.length > 0 ? videoList.map((item) => {
    const thumbnailUrl = item.thumbnail 
      ? resolveImageUrl(item.thumbnail) 
      : '/images/default-video-thumbnail.jpg';
    
    return (
      <tr key={item._id}>
        <td scope="row">
          <div className="feat_property list favorite_page style2">
            <div className="details">
              <div className="tc_content">
                <h4>{item.title || 'Untitled Video'}</h4>
              </div>
            </div>
          </div>
        </td>
        {/* End td */}
        <td>
          {item.thumbnail ? (
            <img
              src={thumbnailUrl}
              alt={item.title || 'Video thumbnail'}
              style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
            />
          ) : (
            <span className="text-muted">No thumbnail</span>
          )}
        </td>
        {/* End td */}
        <td>
          {new Date(item.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </td>
        {/* End td */}
        <td>
          <span className={`status_tag ${item.status ? 'badge2' : 'badge'}`}>
            {item.status ? "Active" : "Deactive"}
          </span>
        </td>
        {/* End td */}
        <td>
          <ul className="view_edit_delete_list mb0">
            <li
              className="list-inline-item"
              data-toggle="tooltip"
              data-placement="top"
              title="Edit"
            >
              <button onClick={() => router.push(`/akoodeadmin/edit-video/${item._id}`)}>
                <span className="flaticon-edit"></span>
              </button>
            </li>
            {/* End li */}
            <li
              className="list-inline-item"
              data-toggle="tooltip"
              data-placement="top"
              title="Delete"
            >
              <a href="#" onClick={(e) => deleteVideo(item._id, e)}>
                <span className="flaticon-garbage"></span>
              </a>
            </li>
          </ul>
        </td>
        {/* End td */}
      </tr>
    );
  }) : null;

  if (loading) {
    return (
      <div className="text-center p-4">
        <p>Loading videos...</p>
      </div>
    );
  }

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            {theadContent.map((value, i) => (
              <th scope="col" key={i}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        {/* End thead */}
        <tbody>
          {videoList && videoList.length > 0 ? (
            tbodyContent
          ) : (
            <tr>
              <td colSpan={5} className="text-center p-4">
                No videos found. <a href="/akoodeadmin/add-video">Add your first video</a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
