export function ResumePreview() {
  return (
    <div className="w-full h-[600px] my-10">
      <embed
        src="/curriculo.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
}
