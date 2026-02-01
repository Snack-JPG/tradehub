"use client";

import { useState } from "react";
import { Upload, Plus, Trash2, Save, Search } from "lucide-react";
import { getAllTrades } from "@/lib/trades";

export default function AddPhotosPage() {
  const [selectedTrade, setSelectedTrade] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [photos, setPhotos] = useState<Array<{
    url: string;
    caption: string;
    type: "before" | "after" | "general";
  }>>([]);

  const allTrades = getAllTrades();
  const filteredTrades = allTrades.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedTradeData = allTrades.find((t) => t.slug === selectedTrade);

  const addPhoto = () => {
    setPhotos([...photos, { url: "", caption: "", type: "general" }]);
  };

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const updatePhoto = (
    index: number,
    field: "url" | "caption" | "type",
    value: string
  ) => {
    const updated = [...photos];
    updated[index] = { ...updated[index], [field]: value };
    setPhotos(updated);
  };

  const generateJSON = () => {
    if (!selectedTradeData) return;

    const updatedTrade = {
      ...selectedTradeData,
      photos: photos.filter((p) => p.url), // Only include photos with URLs
    };

    return JSON.stringify(updatedTrade, null, 2);
  };

  const copyToClipboard = () => {
    const json = generateJSON();
    if (json) {
      navigator.clipboard.writeText(json);
      alert("Copied to clipboard! Paste this into trades.json");
    }
  };

  return (
    <div className="min-h-screen bg-warmgray-50 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-8">
          <h1 className="text-heading-2">Add Photos to Tradespeople</h1>
          <p className="text-body-primary mt-2">
            Manual photo upload tool - generates JSON to paste into trades.json
          </p>
        </div>

        {/* Step 1: Select Trade */}
        <div className="mb-8 rounded-xl border border-warmgray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-navy-950">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
              1
            </span>
            Select Tradesperson
          </h2>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-warmgray-400" />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-warmgray-300 py-2.5 pl-10 pr-4 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <select
            value={selectedTrade}
            onChange={(e) => {
              setSelectedTrade(e.target.value);
              setPhotos([]);
            }}
            className="w-full rounded-lg border border-warmgray-300 py-2.5 px-4 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          >
            <option value="">-- Select a tradesperson --</option>
            {filteredTrades.map((trade) => (
              <option key={trade.slug} value={trade.slug}>
                {trade.name} ({trade.trade_type} · {trade.area})
              </option>
            ))}
          </select>

          {selectedTradeData && (
            <div className="mt-4 rounded-lg bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-900">
                Selected: {selectedTradeData.name}
              </p>
              <p className="text-xs text-amber-700">
                Current photos: {selectedTradeData.photos?.length || 0}
              </p>
            </div>
          )}
        </div>

        {/* Step 2: Add Photos */}
        {selectedTrade && (
          <div className="mb-8 rounded-xl border border-warmgray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-xl font-bold text-navy-950">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                  2
                </span>
                Add Photo URLs
              </h2>
              <button
                onClick={addPhoto}
                className="btn-secondary flex items-center gap-2 text-sm"
              >
                <Plus className="h-4 w-4" />
                Add Photo
              </button>
            </div>

            <div className="space-y-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-warmgray-200 bg-warmgray-50 p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-navy-950">
                      Photo {index + 1}
                    </span>
                    <button
                      onClick={() => removePhoto(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-warmgray-700">
                        Image URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://example.com/photo.jpg"
                        value={photo.url}
                        onChange={(e) =>
                          updatePhoto(index, "url", e.target.value)
                        }
                        className="w-full rounded-lg border border-warmgray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-warmgray-700">
                        Caption
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Bathroom renovation, Birmingham"
                        value={photo.caption}
                        onChange={(e) =>
                          updatePhoto(index, "caption", e.target.value)
                        }
                        className="w-full rounded-lg border border-warmgray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      />
                    </div>

                    <div>
                      <label className="mb-1 block text-sm font-medium text-warmgray-700">
                        Type
                      </label>
                      <select
                        value={photo.type}
                        onChange={(e) =>
                          updatePhoto(
                            index,
                            "type",
                            e.target.value as "before" | "after" | "general"
                          )
                        }
                        className="w-full rounded-lg border border-warmgray-300 px-3 py-2 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      >
                        <option value="general">General</option>
                        <option value="before">Before</option>
                        <option value="after">After</option>
                      </select>
                    </div>

                    {/* Preview */}
                    {photo.url && (
                      <div className="rounded-lg bg-white p-3">
                        <p className="mb-2 text-xs font-semibold text-warmgray-600">
                          Preview:
                        </p>
                        <img
                          src={photo.url}
                          alt={photo.caption || "Preview"}
                          className="h-32 w-full rounded object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext fill='%23999' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EInvalid URL%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {photos.length === 0 && (
                <div className="rounded-lg border-2 border-dashed border-warmgray-300 p-8 text-center">
                  <Upload className="mx-auto h-12 w-12 text-warmgray-400" />
                  <p className="mt-2 text-sm text-warmgray-600">
                    No photos added yet. Click "Add Photo" to start.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Generate JSON */}
        {selectedTrade && photos.length > 0 && (
          <div className="rounded-xl border border-warmgray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-navy-950">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                3
              </span>
              Generate JSON
            </h2>

            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-warmgray-700">
                Copy this JSON and replace the tradesperson's entry in
                trades.json:
              </label>
              <textarea
                readOnly
                value={generateJSON()}
                className="font-mono w-full rounded-lg border border-warmgray-300 bg-warmgray-50 p-4 text-xs"
                rows={20}
              />
            </div>

            <button
              onClick={copyToClipboard}
              className="btn-primary w-full"
            >
              <Save className="h-5 w-5" />
              Copy to Clipboard
            </button>

            <div className="mt-4 rounded-lg bg-blue-50 p-4">
              <p className="text-sm font-semibold text-blue-900">
                📋 Next Steps:
              </p>
              <ol className="mt-2 list-inside list-decimal space-y-1 text-sm text-blue-800">
                <li>Click "Copy to Clipboard"</li>
                <li>Open site/data/trades.json</li>
                <li>Find the entry for "{selectedTradeData?.name}"</li>
                <li>Replace it with the copied JSON</li>
                <li>Save the file</li>
                <li>Refresh your site to see the photos!</li>
              </ol>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-3 font-bold text-blue-900">💡 Photo Upload Tips</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li>
              • <strong>Image hosting:</strong> Upload photos to Imgur, Cloudflare
              Images, or your own server
            </li>
            <li>
              • <strong>Recommended size:</strong> 1200x900px or larger
            </li>
            <li>
              • <strong>Before/After:</strong> Use "before" and "after" types for
              renovation projects
            </li>
            <li>
              • <strong>Captions:</strong> Include location and project type (e.g.,
              "Bathroom renovation, Birmingham")
            </li>
            <li>
              • <strong>Best results:</strong> Add 4-8 photos per tradesperson
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
