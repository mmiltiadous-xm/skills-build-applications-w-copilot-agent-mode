import React, { useEffect, useState } from 'react';

const headerColors = {
  activities: 'bg-primary',
  leaderboard: 'bg-success',
  teams: 'bg-info',
  users: 'bg-secondary',
  workouts: 'bg-warning text-dark',
};

const emptyMessages = {
  activities: 'No activities found.',
  leaderboard: 'No leaderboard data found.',
  teams: 'No teams found.',
  users: 'No users found.',
  workouts: 'No workouts found.',
};

function ResourceTable({ resource }) {
  const [data, setData] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = codespace
    ? `https://${codespace}-8000.app.github.dev/api/${resource}/`
    : `/api/${resource}/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setData(results);
        console.log(`Fetched ${resource}:`, results);
        console.log(`${resource} endpoint:`, endpoint);
      })
      .catch(err => console.error(`Error fetching ${resource}:`, err));
  }, [endpoint, resource]);

  const headerClass = headerColors[resource] || 'bg-dark';
  const emptyMsg = emptyMessages[resource] || 'No data found.';

  return (
    <div className="container mt-4">
      <div className="card">
        <div className={`card-header ${headerClass}`}>
          <h2 className="mb-0 text-capitalize">{resource}</h2>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  {data[0] && Object.keys(data[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
                  <tr key={item.id || idx}>
                    {Object.values(item).map((val, i) => (
                      <td key={i}>{typeof val === 'object' ? JSON.stringify(val) : val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {data.length === 0 && <div className="alert alert-info">{emptyMsg}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourceTable;
