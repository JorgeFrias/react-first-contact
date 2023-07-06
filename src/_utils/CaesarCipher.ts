// Cipher class: CaesarCipher
class CaesarCipher {
  private key: number;

  constructor(key: number) {
    this.key = key;
  }

  encrypt(plaintext: string): string {
    return this.cipherUnicode(plaintext, this.key);
  }

  decrypt(ciphertext: string): string {
    return this.cipherUnicode(ciphertext, -this.key);
  }

  private cipher(text: string, key: number): string {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let c = text.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode(((c - 65 + key) % 26) + 65);
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode(((c - 97 + key) % 26) + 97);
      } else {
        result += text.charAt(i);
      }
    }
    return result;
  }

  // Cipher function that supports unicode
  private cipherUnicode(text: string, shift: number): string {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        // uppercase letters
        charCode = ((charCode - 65 + shift) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
        // lowercase letters
        charCode = ((charCode - 97 + shift) % 26) + 97;
      } else {
        // non-alphabetic characters
        charCode = (charCode + shift) % 65536;
      }
      result += String.fromCharCode(charCode);
    }
    return result;
  }
}

export default CaesarCipher
