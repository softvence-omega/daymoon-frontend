import React, { useState, ChangeEvent } from "react";

interface LogoUploadProps {
  onChange?: (file: File | null) => void;
  label?: string;
  recommendedSize?: string;
  accept?: string;
}

const LogoUpload: React.FC<LogoUploadProps> = ({
  onChange,
  label = "Choose Logo",
  recommendedSize = "Recommended Size: 1024x1024px",
  accept = "image/*",
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file) {
      setFileName(file.name);
      const url = URL.createObjectURL(file);
      setPreview(url);
      onChange?.(file);
    } else {
      setFileName("");
      setPreview(null);
      onChange?.(null);
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <label className="font-semibold text-lg">{label}</label>
      <p className="text-sm text-gray-500">{recommendedSize}</p>

      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="mt-2"
      />

      {fileName && (
        <p className="mt-1 text-sm text-gray-700">
          Selected file: <span className="font-medium">{fileName}</span>
        </p>
      )}

      {preview && (
        <img
          src={preview}
          alt="Logo preview"
          className="mt-3 max-w-[150px] max-h-[150px] object-contain rounded border border-gray-300"
        />
      )}
    </div>
  );
};

export default LogoUpload;
