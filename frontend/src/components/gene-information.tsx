import type {
    GeneBounds,
    GeneDetailsFromSearch,
    GeneFromSearch,
  } from "~/utils/genome-api";
  import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
  import { ExternalLink } from "lucide-react";
  
  export function GeneInformation({
    gene,
    geneDetail,
    geneBounds,
  }: {
    gene: GeneFromSearch;
    geneDetail: GeneDetailsFromSearch | null;
    geneBounds: GeneBounds | null;
  }) {
    return (
      <Card className="gap-0 border-none bg-white py-0 shadow-sm">
        <CardHeader className="pt-4 pb-2">
          <CardTitle className="text-sm font-normal text-[#3c4f3d]/70">
            Gene Information
          </CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex">
                <span className="min-28 w-28 text-xs text-[#3c4f3d]/70">
                  Symbol:
                </span>
                <span className="text-xs">{gene.symbol}</span>
              </div>
              <div className="flex">
                <span className="min-28 w-28 text-xs text-[#3c4f3d]/70">
                  Name:
                </span>
                <span className="text-xs">{gene.name}</span>
              </div>
              {gene.description && gene.description !== gene.name && (
                <div className="flex">
                  <span className="min-28 w-28 text-xs text-[#3c4f3d]/70">
                    Description:
                  </span>
                  <span className="text-xs">{gene.description}</span>
                </div>
              )}
              <div className="flex">
                <span className="min-28 w-28 text-xs text-[#3c4f3d]/70">
                  Chromosome:
                </span>
                <span className="text-xs">{gene.chrom}</span>
              </div>
              {geneBounds && (
                <div className="flex">
                  <span className="min-28 w-28 text-xs text-[#3c4f3d]/70">
                    Position:
                  </span>
                  <span className="text-xs">
                    {Math.min(geneBounds.min, geneBounds.max).toLocaleString()} -{" "}
                    {Math.max(geneBounds.min, geneBounds.max).toLocaleString()} (
                    {Math.abs(
                      geneBounds.max - geneBounds.min + 1,
                    ).toLocaleString()}{" "}
                    bp)
                    {geneDetail?.genomicinfo?.[0]?.strand === "-" &&
                      " (reverse strand)"}
                  </span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              {gene.gene_id && (
                <div className="flex">
                  <span className="min-28 w-28 text-xs text-[#3c4f3d]/70">
                    Gene ID:
                  </span>
                  <span className="text-xs">
                    <a
                      href={`https://www.ncbi.nlm.nih.gov/gene/${gene.gene_id}`}
                      target="_blank"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      {gene.gene_id}
                      <ExternalLink className="ml-1 inline-block h-3 w-3" />
                    </a>
                  </span>
                </div>
              )}
              {geneDetail?.organism && (
                <div className="flex">
                  <span className="w-28 text-xs text-[#3c4f3d]/70">
                    Organism:
                  </span>
                  <span className="text-xs">
                    {geneDetail.organism.scientificname}{" "}
                    {geneDetail.organism.commonname &&
                      ` (${geneDetail.organism.commonname})`}
                  </span>
                </div>
              )}
  
              {geneDetail?.summary && (
                <div className="mt-4">
                  <h3 className="mb-2 text-xs font-medium text-[#3c4f3d]">
                    Summary:
                  </h3>
                  <p className="text-xs leading-relaxed text-[#3c4f3d]/80">
                    {geneDetail.summary}
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }