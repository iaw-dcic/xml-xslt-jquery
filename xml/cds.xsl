<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <div class="titulo">
            <h1>Mis CDs</h1>
        </div>
        <div class="cds">
            <table border="1">
                <tr>
                    <th onclick="displayData('title')">Título</th>
                    <th onclick="displayData('artist')">Artista</th>
                    <th onclick="displayData('country')">Pais</th>
                    <th onclick="displayData('company')">Companía</th>
                    <th onclick="displayData('price')">Precio</th>
                    <th onclick="displayData('year')">Año</th>
                    <th>Imagen</th>
                </tr>
               <xsl:for-each select="catalog/cd"> 
               <!-- <xsl:for-each select="catalog/cd[artist='Bob Dylan']">  -->
                    <xsl:sort id="ordenar" order="ascending" select="artist"/>
                    <tr>
                        <td>
                            <xsl:value-of select="title"/>
                        </td>
                        <td>
                            <xsl:value-of select="artist"/>
                        </td>
                        <td class="centrado">
                            <xsl:value-of select="country"/>
                        </td>
                        <td>
                            <xsl:value-of select="company"/>
                        </td>
                        <td class="precio">
                            <xsl:value-of select="price"/>
                        </td>
                        <td>
                            <xsl:value-of select="year"/>
                        </td>
                        <td class="centrado">
                            <img>
                                <xsl:attribute name="src">
                                    img/<xsl:value-of select="image"/>
                                </xsl:attribute> 
                            </img>
                        </td>    
                    </tr>
                </xsl:for-each>
            </table>
        </div>
    </xsl:template>
</xsl:stylesheet>



