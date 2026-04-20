import { useState, useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styles from "./App.module.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import NoteCard from "./components/NoteCard";
import NoteModal from "./components/NoteModal";
import SkeletonCard from "./components/SkeletonCard";
import EmptyState from "./components/EmptyState";
import { API } from "./utils/helpers";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await fetch(API);
      const data = await res.json();
      setNotes(data);
    } catch (e) {
      console.error("Failed to fetch notes:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async ({ title, description }) => {
    setSaving(true);
    try {
      if (modal?._id) {
        const res = await fetch(`${API}/${modal._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description }),
        });
        const updated = await res.json();
        setNotes((prev) => prev.map((n) => (n._id === updated._id ? updated : n)));
      } else {
        const res = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description }),
        });
        const created = await res.json();
        setNotes((prev) => [created, ...prev]);
      }
      setModal(null);
    } catch (e) {
      console.error("Failed to save note:", e);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    setDeleting(id);
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      setNotes((prev) => prev.filter((n) => n._id !== id));
    } catch (e) {
      console.error("Failed to delete note:", e);
    } finally {
      setDeleting(null);
    }
  };

  const filtered = notes.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

  const showNotesView = location.pathname === "/notes" || location.pathname === "/";
  const openNewNote = () => {
    navigate("/notes");
    setModal({});
  };

  return (
    <>
      <Sidebar onNew={openNewNote} />

      <main className={styles.main}>
        <Navbar onNew={openNewNote} />
        <Routes>
          <Route path="/" element={<Navigate to="/notes" replace />} />
          <Route
            path="/notes"
            element={
              <>
                <SearchBar value={search} onChange={setSearch} />

                <section className={styles.notesSection}>
                  <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                      {search ? `Results for "${search}"` : "Recent Notes"}
                    </h2>
                    <p className={styles.sectionSubtitle}>
                      {loading
                        ? "Fetching your latest manuscripts..."
                        : `${filtered.length} note${filtered.length !== 1 ? "s" : ""}`}
                    </p>
                  </div>

                  {loading ? (
                    <div className="masonry-grid">
                      {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                  ) : filtered.length === 0 ? (
                    <EmptyState onNew={openNewNote} />
                  ) : (
                    <div className="masonry-grid">
                      {filtered.map((note) => (
                        <NoteCard
                          key={note._id}
                          note={note}
                          onEdit={(n) => setModal(n)}
                          onDelete={handleDelete}
                          deleting={deleting}
                        />
                      ))}
                    </div>
                  )}
                </section>
              </>
            }
          />
        </Routes>
      </main>

      {/* Mobile FAB */}
      {showNotesView && (
        <button className={styles.fab} onClick={openNewNote}>
          <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      )}

      {modal !== null && (
        <NoteModal
          note={modal}
          onClose={() => setModal(null)}
          onSave={handleSave}
          saving={saving}
        />
      )}
    </>
  );
}
