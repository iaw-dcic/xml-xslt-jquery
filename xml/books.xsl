<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <div class="titulo">
        <h1>Mis Libros</h1>
    </div>
    <div class="cds">
		<table border="1">
			<tr>
				<th>Autor</th>
				<th>Título</th>
				<th>Género</th>
				<th>Precio</th>
				<th>Publ</th>
				<th>Descripción</th>
			</tr>
			<xsl:for-each select="catalog/book">
			<xsl:sort id="ordenar" order="ascending" select="title"/>
			<tr>
				<td><xsl:value-of select="author"/></td>
				<td><xsl:value-of select="title"/></td>
				<td><xsl:value-of select="genre"/></td>
				<td><xsl:value-of select="price"/></td>
				<td><xsl:value-of select="publish_date"/></td>
				<td><xsl:value-of select="description"/></td>
			</tr>
			</xsl:for-each>
		</table>
	</div>
</xsl:template>
</xsl:stylesheet>