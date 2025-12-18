import { ChevronDown } from "lucide-react";

const DOC_TYPES = [
  { value: "", label: "Todos los manuales" },
  { value: "tecnica", label: "Técnico" },
  { value: "sistema", label: "Sistema" },
];

const EQUIPMENT = [
  { value: "", label: "Todos los equipos" },
  { value: "impresora", label: "Impresora" },
];

const PRINTER_TYPES = [
  { value: "", label: "Todos los tipos" },
  { value: "fiscal", label: "Fiscal" },
  { value: "no_fiscal", label: "No fiscal" },
];

const BRANDS = [
  { value: "", label: "Todas las marcas" },
  { value: "hasar", label: "Hasar" },
  { value: "epson", label: "Epson" },
];

const MODELS_BY_BRAND = {
  hasar: [
    { value: "", label: "Todos los modelos" },
    {
      value: "Impresora_fiscal_Hasar_SMH-P-441F",
      label: "SMH-P-441F",
      subtipo: "fiscal",
    },
    {
      value: "Impresora_fiscal_Hasar_SMH-PT-250F",
      label: "SMH-PT-250F",
      subtipo: "fiscal",
    },
  ],
  epson: [
    { value: "", label: "Todos los modelos" },
    {
      value: "Impresora_NO_fiscal_Epson_TM-T20",
      label: "TM-T20",
      subtipo: "no_fiscal",
    },
  ],
};

const SYSTEMS = [
  { value: "", label: "Todos los sistemas" },
  { value: "StarPOSMarketManual", label: "StarPOS Market" },
];

function Select({ label, value, onChange, options, disabled }) {
  return (
    <label className="relative">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`appearance-none border rounded-lg px-3 py-2 pr-9 text-sm text-slate-700 bg-white hover:bg-slate-50
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {options.map((opt) => (
          <option key={opt.value || opt.label} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </label>
  );
}

export default function ChatHeader({ filters, onChangeFilters }) {
  const update = (patch) => onChangeFilters({ ...filters, ...patch });

  const availableModels =
    filters.marca && MODELS_BY_BRAND[filters.marca]
      ? MODELS_BY_BRAND[filters.marca]
      : [{ value: "", label: "Todos los modelos" }];

  const models = filters.subtipo
    ? availableModels.filter(
        (m) => !m.subtipo || m.subtipo === filters.subtipo || m.value === ""
      )
    : availableModels;

  const handleClearFilters = () => {
    onChangeFilters({
      categoria_equipo: "",
      tipo_documentacion: "",
      subtipo: "",
      marca: "",
      modelo: "",
      sistema: "",
    });
  };

  return (
    <div className="flex items-start justify-between mb-6 gap-6">
      <div>
        <h1 className="text-2xl font-bold">Preguntale a DocuAssist AI</h1>
        <p className="text-slate-500 text-sm">
          Búsqueda entre documentación técnica y manuales de sistema.
        </p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex flex-wrap gap-3">
          {/* Tipo de documentación */}
          <Select
            label="Manual"
            value={filters.tipo_documentacion}
            onChange={(v) =>
              update({
                tipo_documentacion: v,
                categoria_equipo: "",
                subtipo: "",
                marca: "",
                modelo: "",
                sistema: "",
              })
            }
            options={DOC_TYPES}
          />

          {/* Sistema o Equipo */}
          {filters.tipo_documentacion === "sistema" ? (
            <Select
              label="Sistema"
              value={filters.sistema}
              onChange={(v) =>
                update({
                  sistema: v,
                  categoria_equipo: "",
                  subtipo: "",
                  marca: "",
                  modelo: "",
                })
              }
              options={SYSTEMS}
            />
          ) : (
            <Select
              label="Equipo"
              value={filters.categoria_equipo}
              onChange={(v) =>
                update({
                  categoria_equipo: v,
                  subtipo: "",
                  marca: "",
                  modelo: "",
                })
              }
              options={EQUIPMENT}
            />
          )}

          {/* Tipo impresora */}
          <Select
            label="Tipo"
            value={filters.subtipo}
            onChange={(v) =>
              update({
                subtipo: v,
                marca: "",
                modelo: "",
              })
            }
            options={PRINTER_TYPES}
            disabled={
              filters.categoria_equipo !== "impresora" ||
              filters.tipo_documentacion === "sistema"
            }
          />

          {/* Marca */}
          <Select
            label="Marca"
            value={filters.marca}
            onChange={(v) =>
              update({
                marca: v,
                modelo: "",
              })
            }
            options={BRANDS}
            disabled={
              filters.categoria_equipo !== "impresora" ||
              filters.tipo_documentacion === "sistema"
            }
          />

          {/* Modelo */}
          <Select
            label="Modelo"
            value={filters.modelo}
            onChange={(v) => update({ modelo: v })}
            options={models}
            disabled={
              !filters.marca || filters.tipo_documentacion === "sistema"
            }
          />
        </div>

        <button
          type="button"
          onClick={handleClearFilters}
          className="px-3 py-1 text-xs font-medium border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-100"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
