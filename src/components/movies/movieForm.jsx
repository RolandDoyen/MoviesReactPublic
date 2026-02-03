import { useState } from 'react';
import { joinArray, splitAndTrim } from '../../utils/helpers';

export default function MovieForm({ initialData, onSubmit, onCancel, submitLabel = "Save" }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    sypnosis: initialData?.sypnosis || '',
    rating: initialData?.rating || '',
    year: initialData?.year || '',
    length: initialData?.length || '',
    trailerLink: initialData?.trailerLink || '',
    styles: joinArray(initialData?.styles) || '',
    realisators: joinArray(initialData?.realisators) || '',
    scenarists: joinArray(initialData?.scenarists) || '',
    actors: joinArray(initialData?.actors) || '',
    producers: joinArray(initialData?.producers) || ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert form data to API format
    const movieData = {
      title: formData.title,
      sypnosis: formData.sypnosis,
      rating: parseFloat(formData.rating) || 0,
      year: parseInt(formData.year) || 0,
      length: parseInt(formData.length) || 0,
      trailerLink: formData.trailerLink,
      styles: splitAndTrim(formData.styles),
      realisators: splitAndTrim(formData.realisators),
      scenarists: splitAndTrim(formData.scenarists),
      actors: splitAndTrim(formData.actors),
      producers: splitAndTrim(formData.producers)
    };

    onSubmit(movieData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input 
          type="text" 
          id="title" 
          className="form-control" 
          maxLength="200"
          value={formData.title}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="sypnosis" className="form-label">Synopsis</label>
        <textarea 
          id="sypnosis" 
          className="form-control" 
          maxLength="1000"
          rows="4"
          value={formData.sypnosis}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="rating" className="form-label">Rating (0–10)</label>
        <input 
          type="number" 
          id="rating" 
          className="form-control" 
          step="0.1"
          min="0"
          max="10"
          value={formData.rating}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="year" className="form-label">Release Year</label>
        <input 
          type="number" 
          id="year" 
          className="form-control" 
          min="1930"
          max="2030"
          value={formData.year}
          onChange={handleChange}
          required 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="length" className="form-label">Duration (minutes)</label>
        <input 
          type="number" 
          id="length" 
          className="form-control" 
          min="1"
          value={formData.length}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="trailerLink" className="form-label">Trailer Link (URL)</label>
        <input 
          type="url" 
          id="trailerLink" 
          className="form-control"
          value={formData.trailerLink}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="styles" className="form-label">Styles (comma-separated)</label>
        <input 
          type="text" 
          id="styles" 
          className="form-control" 
          placeholder="Action, Comedy, Drama..."
          value={formData.styles}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="realisators" className="form-label">Realisators (comma-separated)</label>
        <input 
          type="text" 
          id="realisators" 
          className="form-control" 
          placeholder="John Doe, Jane Smith..."
          value={formData.realisators}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="scenarists" className="form-label">Scenarists (comma-separated)</label>
        <input 
          type="text" 
          id="scenarists" 
          className="form-control" 
          placeholder="John Doe, Jane Smith..."
          value={formData.scenarists}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="actors" className="form-label">Actors (comma-separated)</label>
        <input 
          type="text" 
          id="actors" 
          className="form-control" 
          placeholder="Actor 1, Actor 2..."
          value={formData.actors}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="producers" className="form-label">Producers (comma-separated)</label>
        <input 
          type="text" 
          id="producers" 
          className="form-control" 
          placeholder="Producer A, Producer B..."
          value={formData.producers}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">{submitLabel}</button>
      <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}