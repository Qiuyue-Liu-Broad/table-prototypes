<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
    >
      <template #item.actions="{ item }">
  <a :href="item.actions.ensemblUrl" target="_blank" rel="noopener noreferrer">
    Ensembl
  </a>
  <span class="mx-2">|</span>
  <a :href="item.actions.UcscUrl" target="_blank" rel="noopener noreferrer">
    UCSC
  </a>
</template>
    </v-data-table>
  </v-container>
</template>

<script>

import {RetrieveAllPaginatedData} from "@/utils/pagination";

export default {
  data() {
    return {
     headers: [
        { text: 'Gene Symbol', value: 'gene_symbol' },
        { text: 'Gencode ID', value: 'gencode_id' },
        { text: 'Entrez Gene', value: 'entrez_gene' },
        { text: 'Location', value: 'location' },
        { text: 'Gene Description', value: 'gene_description' },
        { text: 'Actions', value: 'actions'}
      ],
      items: [
      ],
    };
  },

  mounted(){
    RetrieveAllPaginatedData('https://test.gtexportal.org/api/v2/reference/geneSearch' + '?geneId=' + 'PTEN'
        + '&' + 'gencodeVersion=v39&genomeBuild=GRCh38/hg38').then(retrieved_data =>{
        this.items = retrieved_data.map(item => ({
          gene_symbol: item.geneSymbol,
          gencode_id: item.gencodeId,
          entrez_gene: item.entrezGeneId,
          location: `${item.chromosome}:${item.start}-${item.end}:${item.strand}`,
          gene_description: item.description,
          actions: {ensemblUrl: this.generateEnsemblUrl(item.geneSymbol),
                    UcscUrl: this.generateUcscUrl(item.chromosome, item.start, item.end)}
        }
    ))}).catch(
        error => {
          console.error('Error fetching data:', error);
          this.items = [];
        }
        );
  },
    methods: {
    generateEnsemblUrl(geneSymbol) {
            return `http://www.ensembl.org/Homo_sapiens/Gene/ExpressionAtlas?g=${geneSymbol}`;
        },
    generateUcscUrl(chromosome, start, end) {
            return`http://genome.ucsc.edu/cgi-bin/hgTracks?db=hg38&gtexGene=pack&position=${chromosome}:${start}-${end}`;
        },
  },
};
</script>

<style>
/* Add any custom styles here */
</style>