import { useState } from 'react';

const priorities = ['Low', 'Medium', 'High', 'Urgent'];
const dummyAssignees = ['Alice', 'Bob', 'Charlie'];
const dummyLabels = ['Frontend', 'Backend', 'Bug', 'Feature'];

const AddWorkItemModal = ({ isOpen, onClose, onAdd, columnId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [assignees, setAssignees] = useState([]);
  const [labels, setLabels] = useState([]);
  const [link, setLink] = useState('');
  const [attachment, setAttachment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newItem = {
      title,
      description,
      startDate,
      dueDate,
      priority,
      assignees,
      labels,
      link,
      attachment,
      columnId,
    };

    onAdd(newItem);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setStartDate('');
    setDueDate('');
    setPriority('Medium');
    setAssignees([]);
    setLabels([]);
    setLink('');
    setAttachment(null);
  };

  const toggleSelection = (value, list, setter) => {
    setter(list.includes(value) ? list.filter(v => v !== value) : [...list, value]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4">Create New Work Item</h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            className="p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            required
          />

          <textarea
            className="p-2 rounded bg-gray-800 border border-gray-700"
            rows={3}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400">Start Date</label>
              <input
                type="date"
                className="p-2 w-full rounded bg-gray-800 border border-gray-700"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Due Date</label>
              <input
                type="date"
                className="p-2 w-full rounded bg-gray-800 border border-gray-700"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Priority</label>
            <select
              className="p-2 w-full rounded bg-gray-800 border border-gray-700"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              {priorities.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-400">Assignees</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {dummyAssignees.map(name => (
                <button
                  key={name}
                  type="button"
                  onClick={() => toggleSelection(name, assignees, setAssignees)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    assignees.includes(name)
                      ? 'bg-blue-600 border-blue-500'
                      : 'bg-gray-800 border-gray-600'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Labels</label>
            <div className="flex flex-wrap gap-2 mt-1">
              {dummyLabels.map(label => (
                <button
                  key={label}
                  type="button"
                  onClick={() => toggleSelection(label, labels, setLabels)}
                  className={`px-3 py-1 rounded-full text-sm border ${
                    labels.includes(label)
                      ? 'bg-green-600 border-green-500'
                      : 'bg-gray-800 border-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <input
            type="url"
            className="p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="Optional Link (https://...)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <div>
            <label className="text-sm text-gray-400 block mb-1">Attachment</label>
            <input
              type="file"
              onChange={(e) => setAttachment(e.target.files[0])}
              className="text-sm text-gray-300"
            />
            {attachment && (
              <p className="text-xs mt-1">Selected: {attachment.name}</p>
            )}
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={() => {
                resetForm();
                onClose();
              }}
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWorkItemModal;

