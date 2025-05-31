const WorkItemCard = ({ item }) => {
  if (!item || typeof item !== 'object' || typeof item.title !== 'object') return null;

  const {
    title: {
      title,
      description,
      startDate,
      dueDate,
      priority,
      assignees = [],
      labels = [],
      link,
      attachment
    }
  } = item;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-3">
      <h3 className="text-lg font-bold text-white">
        {typeof title === 'string' ? title : JSON.stringify(title)}
      </h3>

      {description && (
        <p className="text-sm text-gray-300 mt-1">{description}</p>
      )}

      {(startDate || dueDate || priority) && (
        <div className="text-xs text-gray-400 mt-2 flex flex-wrap gap-2">
          {startDate && <span>Start: {startDate}</span>}
          {dueDate && <span>Due: {dueDate}</span>}
          {priority && (
            <span className="font-semibold text-yellow-400">Priority: {priority}</span>
          )}
        </div>
      )}

      {assignees.length > 0 && (
        <div className="mt-2 text-xs text-gray-300">
          Assigned to: {assignees.join(', ')}
        </div>
      )}

      {labels.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1 text-xs">
          {labels.map((label, i) => (
            <span key={i} className="bg-green-600 text-white px-2 py-0.5 rounded-full">
              {label}
            </span>
          ))}
        </div>
      )}

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-400 underline text-xs"
        >
          External Link
        </a>
      )}

      {attachment && (
        <div className="mt-2 text-xs text-gray-400">
          📎 {attachment.name || 'Attached File'}
        </div>
      )}
    </div>
  );
};

export default WorkItemCard;






